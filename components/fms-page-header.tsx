type FmsTitleProps = {
  children: string;
};

export function FmsPageHeader({ children }: FmsTitleProps) {
  return <h2 className="text-2xl text-left py-2">{children}</h2>;
}
