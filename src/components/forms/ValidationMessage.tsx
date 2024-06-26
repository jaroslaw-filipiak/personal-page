export default function ValidationMessage(props: any) {
  const errors = props.errors.filter(
    (item: any) => item.field === props.field_key
  );

  return (
    <>
      {errors.length > 0 && (
        <div className='text-[14px] text-red-500  pt-1 flex items-center gap-2'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='icon icon-tabler icons-tabler-outline icon-tabler-exclamation-circle'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
              <path d='M12 9v4' />
              <path d='M12 16v.01' />
            </svg>
          </div>
          {errors.map((item: any) => item.message)}
        </div>
      )}
    </>
  );
}
