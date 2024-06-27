import Link from "next/link";

const Links = ({ onLinkClick }) => {

  const links = [
    {
      title: 'Partners',
      path: '#mediaPartners'
    },
    {
      title: 'About',
      path: '#aboutUsSection'
    },
    {
      title: 'Tokenomics',
      path: '#tokenomicsSection'
    },
    {
      title: 'Upcoming Events',
      path: '#upcomingSection'
    },
    {
      title: 'Road Map',
      path: '#roadMap'
    },
    {
      title: 'FAQ',
      path: '#howToBuySection'
    },
  ];

  return (
    <div className="navbar-items flex flex-col lg:flex-row my-10 lg:my-0">
      {links.map((link => (
        <Link 
          className="text-white hover:text-[#AD89B1] relative py-3" 
          href={link.path} 
          key={link.title}
          onClick={onLinkClick}
        >
          {link.title}
        </Link>
      )))}
    </div>
  )
}

export default Links