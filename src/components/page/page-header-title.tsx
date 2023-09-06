interface PageHeaderTitleProps {
  title: string
}

export default function PageHeaderTitleComponent({
  title,
}: PageHeaderTitleProps) {
  return <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
}
