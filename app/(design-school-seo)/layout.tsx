import { DesignSchoolSeoShell } from "@/components/design/DesignSchoolSeoShell";

export default function DesignSchoolSeoGroupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DesignSchoolSeoShell>{children}</DesignSchoolSeoShell>;
}
