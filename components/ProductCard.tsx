import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
  tags: string[];
};

export default function ProductCard({
  title,
  description,
  href,
  image,
  tags,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative h-56 overflow-hidden bg-slate-950">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      </div>

      <div className="p-7">
        <h3 className="text-xl font-bold tracking-tight text-slate-950 group-hover:text-blue-600">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 text-sm font-semibold text-blue-600">
          查看详情 →
        </div>
      </div>
    </Link>
  );
}