import { Head } from "@/components/Head";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div>
        <h2>{title}</h2>
      </div>
      <div>{children}</div>
    </>
  );
};
