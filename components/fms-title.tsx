type FmsTitleProps = {
  children: string;
};

function FmsTitle({ children }: FmsTitleProps) {
  return <h2 className="text-3xl font-bold">{children}</h2>;
}

export default FmsTitle;
