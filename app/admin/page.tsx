"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { PlacementCropModal } from "@/components/admin/PlacementCropModal";
import { BlogEditor } from "@/components/admin/BlogEditor";
import {
  PLACEMENT_SCHOOL_OPTIONS,
  type PlacementSchoolName,
} from "@/lib/placementConstants";

// ─── Types ────────────────────────────────────────────────────────────────────

type PlacementCard = {
  _id: string;
  title?: string;
  imageUrl: string;
  cloudinaryPublicId: string;
  schoolName: string;
};

type PlacementGroup = {
  schoolName: string;
  items: PlacementCard[];
  total: number;
};

type CourseModule = {
  label: string;
  title: string;
  content: string;
};

type CourseDoc = {
  _id: string;
  schoolName: string;
  name: string;
  mode: string;
  category: string;
  trainingSummary: string;
  popupHeading: string;
  amount: string;
  originalAmount: string;
  modules: CourseModule[];
  createdAt: string;
};

type BlogDoc = {
  _id: string;
  slug?: string;
  title: string;
  authorName: string;
  authorRole: string;
  authorBio?: string;
  authorPhotoUrl?: string;
  readTime: string;
  category: string;
  bannerUrl?: string;
  content?: string;
  faqs?: { question: string; answer: string }[];
  createdAt: string;
};

const BLOG_CATEGORY_OPTIONS = [
  "Marketing",
  "Tech",
  "Design",
  "Finance",
  "General",
] as const;

// ─── Constants ────────────────────────────────────────────────────────────────

const COURSE_SCHOOL_OPTIONS = [
  "Marketing School",
  "Design School",
  "Tech School",
  "Finance School",
] as const;

type CourseSchoolName = (typeof COURSE_SCHOOL_OPTIONS)[number];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function sortGroupsBySchoolOrder(groups: PlacementGroup[]): PlacementGroup[] {
  const order = [...PLACEMENT_SCHOOL_OPTIONS];
  return [...groups].sort((a, b) => {
    const ia = order.indexOf(a.schoolName as PlacementSchoolName);
    const ib = order.indexOf(b.schoolName as PlacementSchoolName);
    const va = ia === -1 ? 999 : ia;
    const vb = ib === -1 ? 999 : ib;
    if (va !== vb) return va - vb;
    return a.schoolName.localeCompare(b.schoolName);
  });
}

const schoolAccent: Record<string, string> = {
  "Marketing School": "from-rose-500/12 to-orange-500/6 ring-rose-400/25",
  "Design School": "from-violet-500/12 to-fuchsia-500/6 ring-violet-400/25",
  "Tech School": "from-cyan-500/12 to-blue-500/6 ring-cyan-400/25",
  "Finance School": "from-emerald-500/12 to-teal-500/6 ring-emerald-400/25",
};

const EMPTY_MODULE: CourseModule = { label: "", title: "", content: "" };

// ─── Component ────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const backendUrl = useMemo(
    () => process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000",
    []
  );

  // ── Auth
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ── Active admin tab: "placements" | "courses" | "blogs"
  const [activeTab, setActiveTab] = useState<"placements" | "courses" | "blogs">(
    "placements"
  );

  // ── Placements state
  const [groups, setGroups] = useState<PlacementGroup[]>([]);
  const [groupsMeta, setGroupsMeta] = useState<{
    total: number;
    page: number;
    limit: number;
  } | null>(null);
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadSchoolName, setUploadSchoolName] =
    useState<PlacementSchoolName>("Marketing School");
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [cropOpen, setCropOpen] = useState(false);
  const [cropImageSrc, setCropImageSrc] = useState<string | null>(null);

  // ── Courses state
  const [courses, setCourses] = useState<CourseDoc[]>([]);
  const [courseSchoolName, setCourseSchoolName] =
    useState<CourseSchoolName>("Marketing School");
  const [courseMode, setCourseMode] = useState<"Online" | "Offline">("Offline");
  const [courseName, setCourseName] = useState("");
  const [courseTrainingDuration, setCourseTrainingDuration] = useState("");
  const [courseInternshipDuration, setCourseInternshipDuration] = useState("");
  const [courseAmount, setCourseAmount] = useState("");
  const [courseOriginalAmount, setCourseOriginalAmount] = useState("");
  const [courseModules, setCourseModules] = useState<CourseModule[]>([
    { ...EMPTY_MODULE },
  ]);

  // ── Blogs state
  const [blogs, setBlogs] = useState<BlogDoc[]>([]);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogAuthorName, setBlogAuthorName] = useState("");
  const [blogAuthorRole, setBlogAuthorRole] = useState("");
  const [blogAuthorBio, setBlogAuthorBio] = useState("");
  const [blogReadTime, setBlogReadTime] = useState("");
  const [blogCategory, setBlogCategory] = useState("Marketing");
  const [blogContent, setBlogContent] = useState("");
  const [blogBannerFile, setBlogBannerFile] = useState<File | null>(null);
  const [blogCropOpen, setBlogCropOpen] = useState(false);
  const [blogCropSrc, setBlogCropSrc] = useState<string | null>(null);
  // Author photo crop state
  const [blogAuthorPhotoFile, setBlogAuthorPhotoFile] = useState<File | null>(null);
  const [blogAuthorPhotoUrl, setBlogAuthorPhotoUrl] = useState<string>("");
  const [authorPhotoCropOpen, setAuthorPhotoCropOpen] = useState(false);
  const [authorPhotoCropSrc, setAuthorPhotoCropSrc] = useState<string | null>(null);
  // Blog FAQ + edit mode
  const [blogFaqs, setBlogFaqs] = useState<{ question: string; answer: string }[]>([]);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const blogFormRef = useRef<HTMLElement>(null);

  // ─── Toast ──────────────────────────────────────────────────────────────────

  const [toast, setToast] = useState<{ msg: string; type: "error" | "success" } | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showToast(msg: string, type: "error" | "success" = "error") {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ msg, type });
    toastTimer.current = setTimeout(() => setToast(null), 4500);
  }

  // ─── Helpers ────────────────────────────────────────────────────────────────

  function getApiErrorMessage(error: unknown, fallback: string): string {
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as { error?: string } | undefined;
      return data?.error || error.message || fallback;
    }
    return error instanceof Error ? error.message : String(error);
  }

  function handleAuthError(error: unknown): boolean {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      window.localStorage.removeItem("admin_token");
      setToken(null);
      showToast("Session expired. Please log in again.");
      return true;
    }
    return false;
  }

  // ─── Auth effects ───────────────────────────────────────────────────────────

  useEffect(() => {
    const t = window.localStorage.getItem("admin_token");
    if (t) setToken(t);
  }, []);

  // Load placements when token changes
  useEffect(() => {
    if (!token) return;
    (async () => {
      setError(null);
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${backendUrl}/api/admin/placement-cards/grouped?limit=200&page=1`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setGroups(sortGroupsBySchoolOrder(data.groups || []));
        setGroupsMeta({
          total: data.total,
          page: data.page,
          limit: data.limit,
        });
      } catch (e: unknown) {
        const msg = getApiErrorMessage(e, "Failed to load cards");
        setError(msg);
        if (axios.isAxiosError(e) && e.response?.status === 401) {
          window.localStorage.removeItem("admin_token");
          setToken(null);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [backendUrl, token]);

  // Load courses + blogs when token changes
  useEffect(() => {
    if (!token) return;
    refreshCourses(token);
    refreshBlogs(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // ─── Placements actions ──────────────────────────────────────────────────────

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
        username,
        password,
      });
      setToken(data.token);
      window.localStorage.setItem("admin_token", data.token);
    } catch (e: unknown) {
      setError(getApiErrorMessage(e, "Login failed"));
    } finally {
      setLoading(false);
    }
  }

  async function refreshCards(currentToken: string) {
    const { data } = await axios.get(
      `${backendUrl}/api/admin/placement-cards/grouped?limit=200&page=1`,
      { headers: { Authorization: `Bearer ${currentToken}` } }
    );
    setGroups(sortGroupsBySchoolOrder(data.groups || []));
    setGroupsMeta({
      total: data.total,
      page: data.page,
      limit: data.limit,
    });
  }

  function handlePickImage(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f || !f.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }
    setCropImageSrc((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(f);
    });
    setCropOpen(true);
  }

  function handleCropClose() {
    setCropOpen(false);
    setCropImageSrc((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  }

  function handleCroppedFile(file: File) {
    setCropImageSrc((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    setCropOpen(false);
    setUploadFile(file);
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;
    if (!uploadFile) {
      setError("Choose and crop an image first.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const form = new FormData();
      form.append("photo", uploadFile);
      if (uploadTitle.trim()) form.append("title", uploadTitle.trim());
      form.append("schoolName", uploadSchoolName);
      await axios.post(`${backendUrl}/api/admin/placement-cards`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUploadTitle("");
      setUploadSchoolName("Marketing School");
      setUploadFile(null);
      await refreshCards(token);
    } catch (e: unknown) {
      setError(getApiErrorMessage(e, "Upload failed"));
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!token) return;
    setError(null);
    setLoading(true);
    try {
      await axios.delete(`${backendUrl}/api/admin/placement-cards/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await refreshCards(token);
    } catch (e: unknown) {
      setError(getApiErrorMessage(e, "Delete failed"));
    } finally {
      setLoading(false);
    }
  }

  // ─── Courses actions ─────────────────────────────────────────────────────────

  async function refreshCourses(currentToken: string) {
    try {
      const { data } = await axios.get(`${backendUrl}/api/admin/courses`, {
        headers: { Authorization: `Bearer ${currentToken}` },
      });
      setCourses(data.items || []);
    } catch {
      // don't interrupt UX — just leave empty
    }
  }

  // ─── Blogs actions ───────────────────────────────────────────────────────────

  async function refreshBlogs(currentToken: string) {
    try {
      const { data } = await axios.get(`${backendUrl}/api/admin/blogs`, {
        headers: { Authorization: `Bearer ${currentToken}` },
      });
      setBlogs(data.items || []);
    } catch {
      // don't interrupt UX — just leave empty
    }
  }

  function handleBlogBannerPick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f || !f.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }
    setBlogCropSrc((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(f);
    });
    setBlogCropOpen(true);
  }

  function handleBlogCropClose() {
    setBlogCropOpen(false);
    setBlogCropSrc((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  }

  function handleBlogCroppedFile(file: File) {
    setBlogCropSrc((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    setBlogCropOpen(false);
    setBlogBannerFile(file);
  }

  function handleAuthorPhotoPick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f || !f.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }
    setAuthorPhotoCropSrc((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(f);
    });
    setAuthorPhotoCropOpen(true);
  }

  function handleAuthorPhotoCropClose() {
    setAuthorPhotoCropOpen(false);
    setAuthorPhotoCropSrc((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  }

  function handleAuthorPhotoCropped(file: File) {
    setAuthorPhotoCropSrc((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    setAuthorPhotoCropOpen(false);
    setBlogAuthorPhotoFile(file);
  }

  function resetBlogForm() {
    setBlogTitle("");
    setBlogAuthorName("");
    setBlogAuthorRole("");
    setBlogAuthorBio("");
    setBlogReadTime("");
    setBlogCategory("Marketing");
    setBlogContent("");
    setBlogFaqs([]);
    setBlogBannerFile(null);
    setBlogAuthorPhotoFile(null);
    setBlogAuthorPhotoUrl("");
    setEditingBlogId(null);
  }

  function handleCancelEdit() {
    resetBlogForm();
    blogFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleEditBlog(blog: BlogDoc) {
    // Fetch full blog data (content + faqs may be missing from list response)
    try {
      const slug = blog.slug || blog._id;
      const res = await axios.get(`${backendUrl}/api/admin/public-blogs/${slug}`);
      const data = res.data;
      const b: BlogDoc = data.blog ?? data.item ?? (data._id ? data : blog);
      setBlogTitle(b.title || "");
      setBlogAuthorName(b.authorName || "");
      setBlogAuthorRole(b.authorRole || "");
      setBlogAuthorBio(b.authorBio || "");
      setBlogReadTime(b.readTime || "");
      setBlogCategory(b.category || "Marketing");
      setBlogContent(b.content || "");
      setBlogFaqs(Array.isArray(b.faqs) ? b.faqs : []);
      setBlogAuthorPhotoUrl(b.authorPhotoUrl || "");
    } catch {
      // Fall back to data already in the list
      setBlogTitle(blog.title || "");
      setBlogAuthorName(blog.authorName || "");
      setBlogAuthorRole(blog.authorRole || "");
      setBlogAuthorBio(blog.authorBio || "");
      setBlogReadTime(blog.readTime || "");
      setBlogCategory(blog.category || "Marketing");
      setBlogContent(blog.content || "");
      setBlogFaqs(Array.isArray(blog.faqs) ? blog.faqs : []);
      setBlogAuthorPhotoUrl(blog.authorPhotoUrl || "");
    }
    setBlogBannerFile(null);
    setBlogAuthorPhotoFile(null);
    setEditingBlogId(blog._id);
    blogFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleBlogSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;
    const hasContent = blogContent.trim() !== "" && blogContent !== "<p></p>";
    if (!blogTitle.trim()) {
      showToast("Please fill in the blog title.");
      return;
    }
    if (!blogAuthorName.trim()) {
      showToast("Please fill in the author name.");
      return;
    }
    if (!hasContent) {
      showToast("Please write some article content before publishing.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const form = new FormData();
      form.append("title", blogTitle.trim());
      form.append("authorName", blogAuthorName.trim());
      form.append("authorRole", blogAuthorRole.trim());
      form.append("authorBio", blogAuthorBio.trim());
      form.append("readTime", blogReadTime.trim());
      form.append("category", blogCategory);
      form.append("content", blogContent);
      if (blogFaqs.length > 0) form.append("faqs", JSON.stringify(blogFaqs));
      if (blogBannerFile) form.append("banner", blogBannerFile);
      if (blogAuthorPhotoFile) {
        form.append("authorPhoto", blogAuthorPhotoFile);
      } else if (blogAuthorPhotoUrl) {
        form.append("authorPhotoUrl", blogAuthorPhotoUrl);
      }

      if (editingBlogId) {
        const headers = { Authorization: `Bearer ${token}` };
        const url = `${backendUrl}/api/admin/blogs/${editingBlogId}`;
        // Try PATCH first, fall back to PUT (different backends prefer different verbs)
        try {
          await axios.patch(url, form, { headers });
        } catch (patchErr) {
          if (axios.isAxiosError(patchErr) && (patchErr.response?.status === 404 || patchErr.response?.status === 405)) {
            await axios.put(url, form, { headers });
          } else {
            throw patchErr;
          }
        }
        showToast("Blog updated successfully!", "success");
      } else {
        await axios.post(`${backendUrl}/api/admin/blogs`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        showToast("Blog published successfully!", "success");
      }
      resetBlogForm();
      await refreshBlogs(token);
    } catch (e: unknown) {
      if (!handleAuthError(e)) {
        const msg = getApiErrorMessage(e, editingBlogId ? "Update failed" : "Blog publish failed");
        const is404 = axios.isAxiosError(e) && e.response?.status === 404;
        showToast(is404 && editingBlogId ? "Update failed: your backend needs a PATCH /api/admin/blogs/:id route." : msg);
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteBlog(id: string) {
    if (!token) return;
    setError(null);
    setLoading(true);
    try {
      await axios.delete(`${backendUrl}/api/admin/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await refreshBlogs(token);
    } catch (e: unknown) {
      if (!handleAuthError(e)) showToast(getApiErrorMessage(e, "Delete failed"));
    } finally {
      setLoading(false);
    }
  }

  /**
   * Uploads a single image to Cloudinary via the generic /api/admin/upload
   * endpoint and returns the public URL. Used by BlogEditor's inline image button.
   */
  async function handleBlogImageUpload(file: File): Promise<string> {
    if (!token) throw new Error("Not authenticated");
    const form = new FormData();
    form.append("photo", file);
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/admin/upload`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (!data.url) throw new Error("Upload succeeded but no URL returned");
      return data.url as string;
    } catch (e: unknown) {
      handleAuthError(e);
      throw e;
    }
  }

  function addModule() {
    if (courseModules.length >= 10) return;
    setCourseModules((prev) => [...prev, { ...EMPTY_MODULE }]);
  }

  function removeModule(idx: number) {
    setCourseModules((prev) => prev.filter((_, i) => i !== idx));
  }

  function updateModule(
    idx: number,
    field: keyof CourseModule,
    value: string
  ) {
    setCourseModules((prev) =>
      prev.map((m, i) => (i === idx ? { ...m, [field]: value } : m))
    );
  }

  async function handleCourseSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;

    // Validate main course fields
    if (
      !courseName.trim() ||
      !courseTrainingDuration.trim() ||
      !courseInternshipDuration.trim() ||
      !courseAmount.trim()
    ) {
      setError("Please fill in course name, training, internship, and amount.");
      return;
    }

    // Validate modules: Title and Content are now the only inputs needed
    const validModules = courseModules.filter(
      (m) => m.title.trim() && m.content.trim()
    );

    if (validModules.length === 0) {
      setError("Add at least one complete module (title and content).");
      return;
    }

    setError(null);
    setLoading(true);
    try {
      // Automatically generate labels for each module based on its position
      const apiModules = validModules.map((m, idx) => ({
        label: `Module ${idx + 1}`,
        title: m.title.trim(),
        content: m.content.trim(),
      }));

      const trainingSummary = `${courseTrainingDuration.trim()} · ${courseInternshipDuration.trim()}`;

      await axios.post(
        `${backendUrl}/api/admin/courses`,
        {
          schoolName: courseSchoolName,
          mode: courseMode,
          name: courseName.trim(),
          popupHeading: courseName.trim(), // Synchronized with name
          trainingSummary: trainingSummary,
          amount: courseAmount.trim().startsWith("₹") ? courseAmount.trim() : `₹${courseAmount.trim()}`,
          originalAmount: courseOriginalAmount.trim() 
            ? (courseOriginalAmount.trim().startsWith("₹") ? courseOriginalAmount.trim() : `₹${courseOriginalAmount.trim()}`)
            : "",
          modules: apiModules,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Reset form
      setCourseName("");
      setCourseTrainingDuration("");
      setCourseInternshipDuration("");
      setCourseAmount("");
      setCourseOriginalAmount("");
      setCourseModules([{ ...EMPTY_MODULE }]);
      setCourseSchoolName("Marketing School");
      setCourseMode("Offline");
      await refreshCourses(token);
    } catch (e: unknown) {
      setError(getApiErrorMessage(e, "Course upload failed"));
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteCourse(id: string) {
    if (!token) return;
    setError(null);
    setLoading(true);
    try {
      await axios.delete(`${backendUrl}/api/admin/courses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await refreshCourses(token);
    } catch (e: unknown) {
      setError(getApiErrorMessage(e, "Delete failed"));
    } finally {
      setLoading(false);
    }
  }

  // ─── Derived ─────────────────────────────────────────────────────────────────

  const schoolsWithCards = groups.filter((g) => g.items.length > 0).length;

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      {/* Placement banner crop modal */}
      {cropImageSrc ? (
        <PlacementCropModal
          key={cropImageSrc}
          imageSrc={cropImageSrc}
          open={cropOpen}
          onClose={handleCropClose}
          onCropped={handleCroppedFile}
        />
      ) : null}
      {/* Blog banner crop modal — 16:9 */}
      {blogCropSrc ? (
        <PlacementCropModal
          key={blogCropSrc}
          imageSrc={blogCropSrc}
          open={blogCropOpen}
          onClose={handleBlogCropClose}
          onCropped={handleBlogCroppedFile}
          aspect={16 / 9}
        />
      ) : null}
      {/* Author photo crop modal — 1:1 square */}
      {authorPhotoCropSrc ? (
        <PlacementCropModal
          key={authorPhotoCropSrc}
          imageSrc={authorPhotoCropSrc}
          open={authorPhotoCropOpen}
          onClose={handleAuthorPhotoCropClose}
          onCropped={handleAuthorPhotoCropped}
          aspect={1}
        />
      ) : null}

      {/* ── Toast notification ── */}
      {toast && (
        <div
          role="alert"
          className={`fixed bottom-6 right-6 z-[9999] flex items-start gap-3 rounded-2xl border px-5 py-4 text-sm font-medium shadow-2xl backdrop-blur-xl transition-all duration-300 max-w-[360px] ${
            toast.type === "success"
              ? "border-emerald-400/35 bg-emerald-500/15 text-emerald-100"
              : "border-red-400/35 bg-red-500/12 text-red-100"
          }`}
        >
          <span className="mt-px text-base leading-none">
            {toast.type === "success" ? "✓" : "⚠"}
          </span>
          <span className="leading-snug">{toast.msg}</span>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="ml-auto shrink-0 opacity-60 hover:opacity-100 transition-opacity text-xs leading-none"
          >
            ✕
          </button>
        </div>
      )}

      <div className="mb-8 sm:mb-10">
        <h1 className="font-[family-name:var(--font-manrope)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Dashboard
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#A7ADBE]">
          Manage placement images and courses. Changes publish instantly to the
          public site.
        </p>
      </div>

      {error ? (
        <div
          className="mb-8 rounded-2xl border border-red-400/35 bg-red-500/10 px-4 py-3 text-sm text-red-100 backdrop-blur-md"
          role="alert"
        >
          {error}
        </div>
      ) : null}

      {!token ? (
        /* ── Login ── */
        <div className="mx-auto max-w-md">
          <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-6 shadow-lg shadow-black/10 backdrop-blur-xl sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9aa3b8]">
              Sign in
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-manrope)] text-xl font-semibold text-white">
              Welcome back
            </h2>
            <p className="mt-1 text-sm text-[#9aa3b8]">
              Use your admin credentials to manage placement cards and courses.
            </p>
            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              <div className="space-y-2">
                <label htmlFor="admin-user" className="text-xs font-medium text-[#A7ADBE]">
                  Username
                </label>
                <input
                  id="admin-user"
                  autoComplete="username"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none ring-0 transition focus:border-[#4C75FF]/55 focus:ring-2 focus:ring-[#4C75FF]/25"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="admin-pass" className="text-xs font-medium text-[#A7ADBE]">
                  Password
                </label>
                <input
                  id="admin-pass"
                  type="password"
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/55 focus:ring-2 focus:ring-[#4C75FF]/25"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-[#4C75FF] to-[#3558e6] py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:brightness-110 disabled:opacity-50"
              >
                {loading ? "Signing in…" : "Continue"}
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* ── Authenticated ── */
        <div className="space-y-10">
          {/* Stats + logout row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              <div className="rounded-2xl border border-white/12 bg-white/[0.07] px-5 py-4 backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9aa3b8]">
                  Total cards
                </p>
                <p className="mt-1 font-[family-name:var(--font-manrope)] text-2xl font-semibold tabular-nums text-white">
                  {loading && !groupsMeta ? "—" : (groupsMeta?.total ?? 0)}
                </p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/[0.07] px-5 py-4 backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9aa3b8]">
                  Courses
                </p>
                <p className="mt-1 font-[family-name:var(--font-manrope)] text-2xl font-semibold tabular-nums text-white">
                  {courses.length}
                </p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/[0.07] px-5 py-4 backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9aa3b8]">
                  Blogs
                </p>
                <p className="mt-1 font-[family-name:var(--font-manrope)] text-2xl font-semibold tabular-nums text-white">
                  {blogs.length}
                </p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/[0.07] px-5 py-4 backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9aa3b8]">
                  Status
                </p>
                <p className="mt-1 text-sm font-medium text-emerald-300/95">
                  {loading ? "Syncing…" : "Connected"}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-xl border border-white/18 bg-white/[0.08] px-4 py-2.5 text-sm font-medium text-[#d1d5e0] backdrop-blur-sm transition hover:bg-white/15 hover:text-white"
              onClick={() => {
                window.localStorage.removeItem("admin_token");
                setToken(null);
                setGroups([]);
                setGroupsMeta(null);
                setCourses([]);
                setBlogs([]);
              }}
            >
              Log out
            </button>
          </div>

          {/* Tab switcher */}
          <div className="flex gap-2 rounded-2xl border border-white/12 bg-white/[0.05] p-1.5 backdrop-blur-md w-fit">
            <button
              type="button"
              id="tab-placements"
              onClick={() => setActiveTab("placements")}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition ${
                activeTab === "placements"
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-[#9aa3b8] hover:text-white"
              }`}
            >
              Placements
            </button>
            <button
              type="button"
              id="tab-courses"
              onClick={() => setActiveTab("courses")}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition ${
                activeTab === "courses"
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-[#9aa3b8] hover:text-white"
              }`}
            >
              Courses
            </button>
            <button
              type="button"
              id="tab-blogs"
              onClick={() => setActiveTab("blogs")}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition ${
                activeTab === "blogs"
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-[#9aa3b8] hover:text-white"
              }`}
            >
              Blogs
            </button>
          </div>

          {/* ── Placements Tab ── */}
          {activeTab === "placements" && (
            <div className="space-y-10">
              <section className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-6 backdrop-blur-md sm:p-8">
                <div className="mb-6 flex flex-col gap-1 border-b border-white/12 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">
                      New placement
                    </h2>
                    <p className="mt-1 text-sm text-[#9aa3b8]">
                      Pick an image to open the cropper, then submit to upload.
                    </p>
                  </div>
                </div>
                <form onSubmit={handleUpload} className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="upload-title" className="text-xs font-medium text-[#A7ADBE]">
                        Title <span className="font-normal text-[#8890a0]">(optional)</span>
                      </label>
                      <input
                        id="upload-title"
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                        value={uploadTitle}
                        onChange={(e) => setUploadTitle(e.target.value)}
                        placeholder="e.g. Placement at Acme Corp"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="school-select" className="text-xs font-medium text-[#A7ADBE]">
                        School
                      </label>
                      <select
                        id="school-select"
                        className="w-full cursor-pointer appearance-none rounded-xl border border-white/20 bg-white/10 bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat px-4 py-3 text-sm text-white outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                        }}
                        value={uploadSchoolName}
                        onChange={(e) =>
                          setUploadSchoolName(e.target.value as PlacementSchoolName)
                        }
                      >
                        {PLACEMENT_SCHOOL_OPTIONS.map((name) => (
                          <option key={name} value={name} className="bg-[#1a1f2e] text-white">
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-4 rounded-xl border border-dashed border-white/20 bg-white/[0.06] p-5 backdrop-blur-sm">
                    <div className="space-y-2">
                      <span className="text-xs font-medium text-[#A7ADBE]">Photo</span>
                      <label className="relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] py-8 transition hover:border-[#4C75FF]/40 hover:bg-white/10">
                        <input
                          className="absolute inset-0 cursor-pointer opacity-0"
                          type="file"
                          accept="image/*"
                          onChange={handlePickImage}
                        />
                        <span className="text-sm font-medium text-[#d1d5e0]">Click or drop image</span>
                        <span className="mt-1 text-xs text-[#8890a0]">Opens crop tool with fixed ratio</span>
                      </label>
                    </div>
                    {uploadFile ? (
                      <p className="text-center text-xs font-medium text-emerald-400/90">
                        Ready: {uploadFile.name}
                      </p>
                    ) : (
                      <p className="text-center text-xs text-[#8890a0]">No file selected yet</p>
                    )}
                    <button
                      type="submit"
                      disabled={loading || !uploadFile}
                      className="w-full rounded-xl bg-gradient-to-r from-[#4C75FF] to-[#3558e6] py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110 disabled:opacity-40"
                    >
                      {loading ? "Uploading…" : "Upload to Cloudinary"}
                    </button>
                  </div>
                </form>
              </section>

              {/* Placement library */}
              <section>
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">
                      Library by school
                    </h2>
                    <p className="mt-1 text-sm text-[#9aa3b8]">
                      Cards grouped like the public Success Story page.
                    </p>
                  </div>
                </div>

                {groups.length === 0 && !loading ? (
                  <div className="rounded-2xl border border-white/12 bg-white/[0.06] px-6 py-14 text-center text-sm text-[#9aa3b8] backdrop-blur-sm">
                    No cards uploaded yet. Add your first placement above.
                  </div>
                ) : null}

                <div className="space-y-12">
                  {groups.map((group) => (
                    <div key={group.schoolName} className="space-y-5">
                      <div
                        className={`flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/12 bg-gradient-to-r px-5 py-4 ring-1 backdrop-blur-md ${schoolAccent[group.schoolName] ?? "from-white/8 to-white/[0.02] ring-white/15"}`}
                      >
                        <h3 className="font-[family-name:var(--font-manrope)] text-base font-semibold text-white">
                          {group.schoolName}
                        </h3>
                        <span className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-xs font-medium tabular-nums text-[#A7ADBE] backdrop-blur-sm">
                          {group.total} {group.total === 1 ? "card" : "cards"}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {group.items.map((card) => (
                          <article
                            key={card._id}
                            className="group overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] shadow-lg shadow-black/10 backdrop-blur-sm transition hover:border-white/20"
                          >
                            <div className="relative w-full overflow-hidden bg-black/25 aspect-[247.6561737060547/270]">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={card.imageUrl}
                                alt={card.title || "Placement card"}
                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                              />
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                            </div>
                            <div className="flex items-center justify-between gap-3 border-t border-white/12 px-4 py-3">
                              <div className="min-w-0">
                                <p className="truncate text-sm font-medium text-white">
                                  {card.title || "Untitled"}
                                </p>
                                <p className="truncate text-xs text-[#9aa3b8]">{card.schoolName}</p>
                              </div>
                              <button
                                type="button"
                                className="shrink-0 rounded-lg border border-red-400/35 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-100 transition hover:bg-red-500/18"
                                onClick={() => handleDelete(card._id)}
                                disabled={loading}
                              >
                                Delete
                              </button>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* ── Courses Tab ── */}
          {activeTab === "courses" && (
            <div className="space-y-10">
              {/* New course form */}
              <section className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-6 backdrop-blur-md sm:p-8">
                <div className="mb-6 border-b border-white/12 pb-6">
                  <h2 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">
                    New course
                  </h2>
                  <p className="mt-1 text-sm text-[#9aa3b8]">
                    Fill in the details below. The course will appear on the public site immediately.
                  </p>
                </div>

                <form onSubmit={handleCourseSubmit} className="space-y-8">
                  {/* Row 1: School + Mode */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="course-school" className="text-xs font-medium text-[#A7ADBE]">
                        School
                      </label>
                      <select
                        id="course-school"
                        className="w-full cursor-pointer appearance-none rounded-xl border border-white/20 bg-white/10 bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat px-4 py-3 text-sm text-white outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                        }}
                        value={courseSchoolName}
                        onChange={(e) => setCourseSchoolName(e.target.value as CourseSchoolName)}
                      >
                        {COURSE_SCHOOL_OPTIONS.map((name) => (
                          <option key={name} value={name} className="bg-[#1a1f2e] text-white">
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="course-mode" className="text-xs font-medium text-[#A7ADBE]">
                        Mode
                      </label>
                      <select
                        id="course-mode"
                        className="w-full cursor-pointer appearance-none rounded-xl border border-white/20 bg-white/10 bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat px-4 py-3 text-sm text-white outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                        }}
                        value={courseMode}
                        onChange={(e) => setCourseMode(e.target.value as "Online" | "Offline")}
                      >
                        <option value="Offline" className="bg-[#1a1f2e] text-white">Offline</option>
                        <option value="Online" className="bg-[#1a1f2e] text-white">Online</option>
                      </select>
                    </div>
                  </div>

                   {/* Row 2: Course name */}
                  <div className="space-y-2">
                    <label htmlFor="course-name" className="text-xs font-medium text-[#A7ADBE]">
                      Course name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="course-name"
                      required
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      placeholder="e.g. Basic to Advanced Digital Marketing"
                    />
                  </div>

                  {/* Row 3: Training + Internship */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="course-training" className="text-xs font-medium text-[#A7ADBE]">
                        Training duration <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="course-training"
                        required
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                        value={courseTrainingDuration}
                        onChange={(e) => setCourseTrainingDuration(e.target.value)}
                        placeholder="e.g. 6 Months Training"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="course-internship" className="text-xs font-medium text-[#A7ADBE]">
                        Internship duration <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="course-internship"
                        required
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                        value={courseInternshipDuration}
                        onChange={(e) => setCourseInternshipDuration(e.target.value)}
                        placeholder="e.g. 1 Month Internship"
                      />
                    </div>
                  </div>

                   {/* Row 4: Amount + Original amount */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="course-amount" className="text-xs font-medium text-[#A7ADBE]">
                        Course amount <span className="text-red-400">*</span>{" "}
                        <span className="font-normal text-[#8890a0]">(in ₹)</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#A7ADBE]">₹</span>
                        <input
                          id="course-amount"
                          required
                          className="w-full rounded-xl border border-white/20 bg-white/10 pl-8 pr-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                          value={courseAmount.replace("₹", "")}
                          onChange={(e) => setCourseAmount(e.target.value)}
                          placeholder="80,000"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="course-original-amount" className="text-xs font-medium text-[#A7ADBE]">
                        Original amount{" "}
                        <span className="font-normal text-[#8890a0]">(struck-through, in ₹)</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#A7ADBE]">₹</span>
                        <input
                          id="course-original-amount"
                          className="w-full rounded-xl border border-white/20 bg-white/10 pl-8 pr-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                          value={courseOriginalAmount.replace("₹", "")}
                          onChange={(e) => setCourseOriginalAmount(e.target.value)}
                          placeholder="85,000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Modules */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-medium text-[#A7ADBE]">
                          Modules <span className="text-red-400">*</span>
                        </p>
                        <p className="text-[11px] text-[#8890a0]">
                          Each module appears as an accordion item in the course popup
                        </p>
                      </div>
                      {courseModules.length < 10 && (
                        <button
                          type="button"
                          onClick={addModule}
                          className="shrink-0 rounded-lg border border-white/20 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-[#d1d5e0] transition hover:bg-white/15"
                        >
                          + Add module
                        </button>
                      )}
                    </div>

                    <div className="space-y-4">
                      {courseModules.map((mod, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-white/12 bg-white/[0.04] p-4 space-y-3"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9aa3b8]">
                              Module {idx + 1}
                            </span>
                            {courseModules.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeModule(idx)}
                                className="text-[11px] text-red-400/80 hover:text-red-400 transition"
                              >
                                Remove
                              </button>
                            )}
                          </div>
                          <div className="grid gap-3">
                            <input
                              className="w-full rounded-lg border border-white/15 bg-white/[0.07] px-3 py-2.5 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/40 focus:ring-1 focus:ring-[#4C75FF]/20"
                              placeholder="Title  (e.g. Brand Foundations)"
                              value={mod.title}
                              onChange={(e) => updateModule(idx, "title", e.target.value)}
                            />
                          </div>
                          <textarea
                            rows={2}
                            className="w-full resize-none rounded-lg border border-white/15 bg-white/[0.07] px-3 py-2.5 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/40 focus:ring-1 focus:ring-[#4C75FF]/20"
                            placeholder="Content — brief description of what students learn in this module"
                            value={mod.content}
                            onChange={(e) => updateModule(idx, "content", e.target.value)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-[#4C75FF] to-[#3558e6] py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110 disabled:opacity-40"
                  >
                    {loading ? "Publishing…" : "Publish course"}
                  </button>
                </form>
              </section>

              {/* Course library */}
              <section>
                <div className="mb-6">
                  <h2 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">
                    Course library
                  </h2>
                  <p className="mt-1 text-sm text-[#9aa3b8]">
                    All published courses. Deleting a course removes it from the public site immediately.
                  </p>
                </div>

                {courses.length === 0 ? (
                  <div className="rounded-2xl border border-white/12 bg-white/[0.06] px-6 py-14 text-center text-sm text-[#9aa3b8] backdrop-blur-sm">
                    No courses published yet. Add your first course above.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {courses.map((course) => (
                      <article
                        key={course._id}
                        className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-sm transition hover:border-white/20"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="min-w-0 flex-1 space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className={`rounded-full border border-white/15 bg-white/[0.08] px-2.5 py-0.5 text-[11px] font-medium text-[#A7ADBE] ${schoolAccent[course.schoolName] ? "bg-gradient-to-r " + schoolAccent[course.schoolName] : ""}`}
                              >
                                {course.schoolName}
                              </span>
                              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[11px] text-[#9aa3b8]">
                                {course.mode}
                              </span>
                              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[11px] text-[#9aa3b8]">
                                {course.modules.length} module{course.modules.length !== 1 ? "s" : ""}
                              </span>
                            </div>
                            <p className="truncate text-sm font-semibold text-white">
                              {course.name}
                            </p>
                            <p className="text-xs text-[#9aa3b8]">{course.trainingSummary}</p>
                            <p className="text-xs text-[#9aa3b8]">
                              Amount:{" "}
                              <span className="font-medium text-emerald-300/90">{course.amount}</span>
                              {course.originalAmount ? (
                                <span className="ml-1 line-through text-[#9aa3b8]">
                                  {course.originalAmount}
                                </span>
                              ) : null}
                            </p>
                          </div>
                          <button
                            type="button"
                            className="shrink-0 self-start rounded-lg border border-red-400/35 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-100 transition hover:bg-red-500/18"
                            onClick={() => handleDeleteCourse(course._id)}
                            disabled={loading}
                          >
                            Delete
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </section>
            </div>
          )}
          {/* ── Blogs Tab ── */}
          {activeTab === "blogs" && (
            <div className="space-y-10">
              {/* New / Edit blog form */}
              <section ref={blogFormRef} className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-6 backdrop-blur-md sm:p-8">
                <div className="mb-6 border-b border-white/12 pb-6 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">
                      {editingBlogId ? "Edit blog" : "New blog"}
                    </h2>
                    <p className="mt-1 text-sm text-[#9aa3b8]">
                      {editingBlogId
                        ? "Update the article details and click Save changes."
                        : "Fill in the details and write the article. It will publish to the public blog page immediately."}
                    </p>
                  </div>
                  {editingBlogId && (
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="shrink-0 rounded-lg border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-[#A7ADBE] transition hover:bg-white/10 hover:text-white"
                    >
                      ✕ Cancel edit
                    </button>
                  )}
                </div>

                <form onSubmit={handleBlogSubmit} className="space-y-6">
                  {/* Row 1: Title */}
                  <div className="space-y-2">
                    <label htmlFor="blog-title" className="text-xs font-medium text-[#A7ADBE]">
                      Title <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="blog-title"
                      required
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                      value={blogTitle}
                      onChange={(e) => setBlogTitle(e.target.value)}
                      placeholder="e.g. 10 Must-Have Marketing Skills in 2025"
                    />
                  </div>

                  {/* Row 2: Existing author picker */}
                  {(() => {
                    const seen = new Set<string>();
                    const uniqueAuthors = blogs.filter((b) => {
                      if (!b.authorName?.trim() || seen.has(b.authorName.trim())) return false;
                      seen.add(b.authorName.trim());
                      return true;
                    });
                    if (uniqueAuthors.length === 0) return null;
                    return (
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-[#A7ADBE]">
                          Select existing author <span className="font-normal text-[#8890a0]">(auto-fills fields below)</span>
                        </label>
                        <select
                          className="w-full cursor-pointer appearance-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1rem" }}
                          value=""
                          onChange={(e) => {
                            const picked = uniqueAuthors.find((b) => b.authorName.trim() === e.target.value);
                            if (!picked) return;
                            setBlogAuthorName(picked.authorName.trim());
                            setBlogAuthorRole(picked.authorRole?.trim() ?? "");
                            setBlogAuthorBio(picked.authorBio?.trim() ?? "");
                            setBlogAuthorPhotoUrl(picked.authorPhotoUrl?.trim() ?? "");
                            setBlogAuthorPhotoFile(null);
                          }}
                        >
                          <option value="" className="bg-[#1a1f2e] text-[#8890a0]">— pick an author —</option>
                          {uniqueAuthors.map((b) => (
                            <option key={b._id} value={b.authorName.trim()} className="bg-[#1a1f2e] text-white">
                              {b.authorName.trim()}{b.authorRole ? ` · ${b.authorRole}` : ""}
                            </option>
                          ))}
                        </select>
                      </div>
                    );
                  })()}

                  {/* Row 3: Author name + Role */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="blog-author" className="text-xs font-medium text-[#A7ADBE]">
                        Author name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="blog-author"
                        required
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                        value={blogAuthorName}
                        onChange={(e) => setBlogAuthorName(e.target.value)}
                        placeholder="e.g. Priya Sharma"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="blog-author-role" className="text-xs font-medium text-[#A7ADBE]">
                        Author role
                      </label>
                      <input
                        id="blog-author-role"
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                        value={blogAuthorRole}
                        onChange={(e) => setBlogAuthorRole(e.target.value)}
                        placeholder="e.g. Senior Marketing Trainer"
                      />
                    </div>
                  </div>

                  {/* Author photo + bio */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <span className="text-xs font-medium text-[#A7ADBE]">
                        Author photo <span className="font-normal text-[#8890a0]">(1:1, optional)</span>
                      </span>
                      <div className="flex flex-col gap-3 rounded-xl border border-dashed border-white/20 bg-white/[0.06] p-3">
                        <label className="relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] py-5 transition hover:border-[#4C75FF]/40 hover:bg-white/10">
                          <input
                            className="absolute inset-0 cursor-pointer opacity-0"
                            type="file"
                            accept="image/*"
                            onChange={handleAuthorPhotoPick}
                          />
                          <span className="text-sm font-medium text-[#d1d5e0]">Click or drop photo</span>
                          <span className="mt-1 text-xs text-[#8890a0]">Square crop · shown in sidebar</span>
                        </label>
                        {blogAuthorPhotoFile ? (
                          <p className="text-center text-xs font-medium text-emerald-400/90">Ready: {blogAuthorPhotoFile.name}</p>
                        ) : blogAuthorPhotoUrl ? (
                          <div className="flex flex-col items-center gap-2">
                            <img src={blogAuthorPhotoUrl} alt="Author" className="w-12 h-12 rounded-xl object-cover ring-1 ring-white/20" />
                            <p className="text-center text-xs font-medium text-emerald-400/90">Using existing photo</p>
                          </div>
                        ) : (
                          <p className="text-center text-xs text-[#8890a0]">No photo selected</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="blog-author-bio" className="text-xs font-medium text-[#A7ADBE]">
                        Author bio <span className="font-normal text-[#8890a0]">(optional)</span>
                      </label>
                      <textarea
                        id="blog-author-bio"
                        rows={5}
                        className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                        value={blogAuthorBio}
                        onChange={(e) => setBlogAuthorBio(e.target.value)}
                        placeholder="Short bio shown in the sidebar of the blog detail page…"
                      />
                    </div>
                  </div>

                  {/* Row 3: Read Time + Category */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="blog-read-time" className="text-xs font-medium text-[#A7ADBE]">
                        Read time
                      </label>
                      <input
                        id="blog-read-time"
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                        value={blogReadTime}
                        onChange={(e) => setBlogReadTime(e.target.value)}
                        placeholder="e.g. 5 mins"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="blog-category" className="text-xs font-medium text-[#A7ADBE]">
                        Category
                      </label>
                      <select
                        id="blog-category"
                        className="w-full cursor-pointer appearance-none rounded-xl border border-white/20 bg-white/10 bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat px-4 py-3 text-sm text-white outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                        }}
                        value={blogCategory}
                        onChange={(e) => setBlogCategory(e.target.value)}
                      >
                        {BLOG_CATEGORY_OPTIONS.map((cat) => (
                          <option key={cat} value={cat} className="bg-[#1a1f2e] text-white">
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Banner upload */}
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-[#A7ADBE]">Banner image <span className="font-normal text-[#8890a0]">(16:9, optional)</span></span>
                    <div className="flex flex-col gap-3 rounded-xl border border-dashed border-white/20 bg-white/[0.06] p-4">
                      <label className="relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] py-6 transition hover:border-[#4C75FF]/40 hover:bg-white/10">
                        <input
                          className="absolute inset-0 cursor-pointer opacity-0"
                          type="file"
                          accept="image/*"
                          onChange={handleBlogBannerPick}
                        />
                        <span className="text-sm font-medium text-[#d1d5e0]">Click or drop banner image</span>
                        <span className="mt-1 text-xs text-[#8890a0]">Opens crop tool · 16:9 ratio</span>
                      </label>
                      {blogBannerFile ? (
                        <p className="text-center text-xs font-medium text-emerald-400/90">Ready: {blogBannerFile.name}</p>
                      ) : (
                        <p className="text-center text-xs text-[#8890a0]">No banner selected</p>
                      )}
                    </div>
                  </div>

                  {/* Block builder */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#A7ADBE]">
                      Article content <span className="text-red-400">*</span>
                    </label>
                    <BlogEditor
                      value={blogContent}
                      onChange={setBlogContent}
                      onImageUpload={handleBlogImageUpload}
                    />
                  </div>

                  {/* FAQ builder */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-medium text-[#A7ADBE]">
                        FAQ section <span className="font-normal text-[#8890a0]">(optional)</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setBlogFaqs((prev) => [...prev, { question: "", answer: "" }])}
                        className="rounded-lg border border-[#4C75FF]/40 bg-[#4C75FF]/10 px-3 py-1.5 text-xs font-medium text-[#7fa0ff] transition hover:bg-[#4C75FF]/20"
                      >
                        + Add FAQ
                      </button>
                    </div>
                    {blogFaqs.length === 0 && (
                      <p className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center text-xs text-[#8890a0]">
                        No FAQs yet. Click &quot;+ Add FAQ&quot; to add a question &amp; answer pair.
                      </p>
                    )}
                    {blogFaqs.map((faq, idx) => (
                      <div key={idx} className="rounded-xl border border-white/15 bg-white/[0.05] p-4 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs font-semibold text-[#A7ADBE]">FAQ {idx + 1}</span>
                          <button
                            type="button"
                            onClick={() => setBlogFaqs((prev) => prev.filter((_, i) => i !== idx))}
                            className="text-xs text-red-400/80 hover:text-red-400 transition"
                          >
                            Remove
                          </button>
                        </div>
                        <input
                          className="w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-1 focus:ring-[#4C75FF]/20"
                          placeholder="Question"
                          value={faq.question}
                          onChange={(e) =>
                            setBlogFaqs((prev) =>
                              prev.map((f, i) => i === idx ? { ...f, question: e.target.value } : f)
                            )
                          }
                        />
                        <textarea
                          rows={3}
                          className="w-full resize-none rounded-lg border border-white/15 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-1 focus:ring-[#4C75FF]/20"
                          placeholder="Answer"
                          value={faq.answer}
                          onChange={(e) =>
                            setBlogFaqs((prev) =>
                              prev.map((f, i) => i === idx ? { ...f, answer: e.target.value } : f)
                            )
                          }
                        />
                      </div>
                    ))}
                  </div>

                  {/* Submit */}
                  <div className="flex gap-3">
                    {editingBlogId && (
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="flex-1 rounded-xl border border-white/20 bg-white/[0.06] py-3 text-sm font-semibold text-[#A7ADBE] transition hover:bg-white/10 hover:text-white"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 rounded-xl bg-gradient-to-r from-[#4C75FF] to-[#3558e6] py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110 disabled:opacity-40"
                    >
                      {loading
                        ? editingBlogId ? "Saving…" : "Publishing…"
                        : editingBlogId ? "Save changes" : "Publish blog"}
                    </button>
                  </div>
                </form>
              </section>

              {/* Blog library */}
              <section>
                <div className="mb-6">
                  <h2 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">
                    Blog library
                  </h2>
                  <p className="mt-1 text-sm text-[#9aa3b8]">
                    All published posts. Deleting a blog removes it from the public site immediately.
                  </p>
                </div>

                {blogs.length === 0 ? (
                  <div className="rounded-2xl border border-white/12 bg-white/[0.06] px-6 py-14 text-center text-sm text-[#9aa3b8] backdrop-blur-sm">
                    No blogs published yet. Write your first article above.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {blogs.map((blog) => (
                      <article
                        key={blog._id}
                        className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-sm transition hover:border-white/20"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="min-w-0 flex-1 space-y-1.5">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-full border border-violet-400/25 bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-medium text-violet-300">
                                {blog.category}
                              </span>
                              {blog.readTime && (
                                <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[11px] text-[#9aa3b8]">
                                  {blog.readTime}
                                </span>
                              )}
                              {editingBlogId === blog._id && (
                                <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-300">
                                  Editing
                                </span>
                              )}
                            </div>
                            <p className="truncate text-sm font-semibold text-white">{blog.title}</p>
                            <p className="text-xs text-[#9aa3b8]">
                              {blog.authorName}{blog.authorRole ? ` · ${blog.authorRole}` : ""}
                            </p>
                          </div>
                          <div className="flex shrink-0 items-center gap-2">
                            <button
                              type="button"
                              className="rounded-lg border border-[#4C75FF]/35 bg-[#4C75FF]/10 px-3 py-1.5 text-xs font-medium text-[#7fa0ff] transition hover:bg-[#4C75FF]/20 disabled:opacity-40"
                              onClick={() => handleEditBlog(blog)}
                              disabled={loading}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="rounded-lg border border-red-400/35 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-100 transition hover:bg-red-500/18 disabled:opacity-40"
                              onClick={() => handleDeleteBlog(blog._id)}
                              disabled={loading}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </section>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
