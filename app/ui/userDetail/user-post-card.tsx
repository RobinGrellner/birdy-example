import { Card, CardContent } from "@/components/ui/card";

export default function UserPostCard({ post }: { post: any }) {
  return (
    <Card className="my-3">
      <CardContent>
        <h1 className="text-xl font-bold">{post.title}</h1>
        <p>{post.body}</p>
        <div className="flex flex-row gap-5 my-2">
          <div className="flex flex-row">
            <svg
              className="w-6 h-6 fill-background stroke-slate-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth="2"
                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
              />
              <path strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            {post.views}
          </div>
          <div className="flex flex-row">
            <svg
              className="w-6 h-6 fill-background stroke-slate-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                strokeWidth="2"
                d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z"
                clipRule="evenodd"
              />
            </svg>
            {post.reactions.likes}
          </div>
          <div className="flex flex-row">
            <svg
              className="w-6 h-6 fill-background stroke-slate-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                strokeWidth="2"
                d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z"
                clipRule="evenodd"
              />
            </svg>
            {post.reactions.dislikes}
          </div>
        </div>
        <div>
          {post.tags.map((tag: string) => (
            <span
              key={"post_" + post.id + "_tag_" + tag}
              className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-500/10 ring-inset mr-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
