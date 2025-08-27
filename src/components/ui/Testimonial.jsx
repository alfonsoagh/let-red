export function Testimonial({ quote, author, role }){
  return (
    <figure className='card'>
      <blockquote style={{fontStyle:'italic'}}>“{quote}”</blockquote>
      <figcaption className='mt-2 text-sm text-muted'>— {author}{role?`, ${role}`:''}</figcaption>
    </figure>
  )}