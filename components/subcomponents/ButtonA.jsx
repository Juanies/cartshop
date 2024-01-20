import Link from 'next/link'

export default function ButtonA ({url, name}) {
    return (
      <li className='hover:bg-slate-500 hover:scale-110 transition-all rounded-md p-3 '>
        <Link href={url}>{name}</Link>
      </li>
    );
  }