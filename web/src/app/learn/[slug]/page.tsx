import { notFound } from 'next/navigation';
import { CoursePlayer } from '@/components/course/course-player';
import { getCatalogItem, getCourse } from '@/lib/courses';

export function generateStaticParams() {
  return [{ slug: 'branding' }, { slug: 'business-communication' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCatalogItem(slug);
  return {
    title: item?.title ?? 'Course',
  };
}

export default async function LearnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) {
    notFound();
  }

  return <CoursePlayer course={course} />;
}
