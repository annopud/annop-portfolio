import { Suspense } from 'react';
import Introduction from './introduction';

export default function Profile() {
  return (
    <div className={`flex h-[100vh] justify-center`}>
      <div
        className={`flex flex-col items-center justify-center gap-2 overflow-x-clip font-kodchasan text-[2.5rem] leading-[3rem] sm:text-[3.5rem] sm:leading-[4.5rem]`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Introduction />
        </Suspense>
      </div>
    </div>
  );
}
