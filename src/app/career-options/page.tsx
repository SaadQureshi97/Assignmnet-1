"use client";

export default async function Careeroption() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return (
    <div className="bg-gray-200 min-h-screen p-10">
      <div className="flex items-start justify-between">
        {/* Left side: About content */}
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-6">Career-Option</h1>
          <p className="text-justify text-2xl">
            A firm's "Career Option" section typically lists job openings in
            verious department along with application details. It may also
            highlight employee success stories, values, and desired candidate
            qualities.
          </p>
        </div>
        </div>
    </div>
  );
}