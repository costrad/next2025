export default function Loading() {
  // Stack uses React Suspense, which will render this page while user data is being fetched.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="loaderAnim"></div>
    </div>

  );
}
