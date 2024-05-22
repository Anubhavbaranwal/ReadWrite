export interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  author: string;
  id:number;
}

const BlogCard = ({ title, description, date, author }: BlogCardProps) => {
  return (
    // <div className="">
    <div className="border-b border-slate-200 p-2 w-screen max-w-screen-lg  cursor-pointer ">
      <p>
        {" "}
        <Avatar author={author} /> {author}{" "}
        <span className="font-extralight pl-2">. {date}</span>
      </p>
      <h1 className="font-semibold text-2xl">{title}</h1>
      <p className="font-thin text-xl">
        {description.length > 100
          ? description.slice(0, 100) + "..."
          : description}
      </p>
      <div className="font-thin text-slate-300">
        {`${Math.ceil(description.length / 100)} min read`}
      </div>
    </div>
    // </div>
  );
};

export function Avatar({ author }: { author: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {author[0]}
      </span>
    </div>
  );
}

export default BlogCard;
