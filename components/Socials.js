import Link from 'next/link'

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiGithubLine,
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-2xl'> 
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/juan-fernando-665204203/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/juanfsouza'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://twitter.com/JuanFer43796479'} className='hover:text-accent transition-all duration-300'>
        <RiTwitterLine />
      </Link>
    </div>
  ) 
};

export default Socials;
