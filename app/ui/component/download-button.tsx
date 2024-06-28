import clsx from 'clsx';
import Link from 'next/link';

export default function DownloadButton({
  className = '',
}: {
  className?: string;
}) {
  return (
    <Link
      href="/CV_Annop_U.pdf"
      target="_blank"
      className={clsx(
        'flex items-center justify-center rounded-lg p-2 shadow-[0px_2px_16px_0px] shadow-purple-900 hover:text-purple-200 hover:shadow-purple-500',
        className
      )}
    >
      Download CV
    </Link>
  );
}
