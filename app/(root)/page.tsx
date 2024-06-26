import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="bg-primary-50 bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 ">
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh]   object-contain object-center 2xl:max-h-[50vh]"
          />
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h2-bold">
              Explore the latest tech trends and innovations with us!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Experience the forefront of technology at our upcoming IT event!
              Dive into cutting-edge innovations, engage with experts, and
              network with peers. Don't miss your chance to shape the future of
              digital technology!
            </p>
            {/* <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button> */}
          </div>
        </div>
      </section>
      <section className="bg-secondary py-10">
        <div id="events" className="wrapper  flex flex-col gap-8 md:gap-12 ]">
          <h2 className="h2-bold">Events</h2>

          <div className="flex w-full flex-col gap-5 md:flex-row">
            <Search />
            <CategoryFilter />
          </div>

          <Collection
            data={events?.data}
            emptyTitle="No Events Found"
            emptyStateSubtext="Come back later"
            collectionType="All_Events"
            limit={6}
            page={page}
            totalPages={events?.totalPages}
          />
        </div>
      </section>
    </>
  );
}
