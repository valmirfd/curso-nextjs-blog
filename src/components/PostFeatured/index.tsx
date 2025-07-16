import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function PostFeatured() {
  const slug = 'jesus';
  const postLink = `/post/${slug}`;
  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_6.png',
          alt: 'Imagem principal',
          priority: true,
        }}
      />
      <div className='flex flex-col gap-4 sm:justify-center'>
        <time
          className='text-slate-600 block text-sm/tight'
          dateTime='2025-07-14'
        >
          14/07/2025 13:52
        </time>

        <PostHeading as='h1' url={postLink}>
          Jesus te ama e quer te salvar
        </PostHeading>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          similique hic rem officiis delectus non ab facere cumque aspernatur in
          nobis necessitatibus numquam ipsa deserunt, assumenda, corrupti earum
          nostrum error!
        </p>
      </div>
    </section>
  );
}
