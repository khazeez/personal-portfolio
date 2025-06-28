export default function Glassmorphin({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className='relative flex items-center justify-center'>
      {/* Cahaya di belakang */}
      {/* <div className='absolute -inset-2 bg-blue-400 rounded-xl blur-3xl opacity-30 z-0' /> */}

      {/* Card glassmorphin */}
      <div
        className={`
          glassmorphin z-10 relative
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
}
