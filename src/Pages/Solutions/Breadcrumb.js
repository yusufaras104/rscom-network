import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const isLastSegment = index === pathSegments.length - 1;
    const link = isLastSegment ? segment : `/${pathSegments.slice(0, index + 1).join('/')}`;
    const text = isLastSegment ? segment : segment.charAt(0).toUpperCase() + segment.slice(1);
    return (
      <li key={segment} className={isLastSegment ? 'breadcrumb-item text-white active' : 'breadcrumb-item'}>
        {!isLastSegment && <a className="text-white" href={link}>{text}</a>}
        {isLastSegment && <span className="text-white">{text}</span>}
      </li>
    );
  });

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
        {breadcrumbItems}
      </ol>
    </nav>
  );
};

export default Breadcrumb;