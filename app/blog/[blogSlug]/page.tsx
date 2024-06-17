import BlogCard from "@/components/blog-card";
import CommentForm from "@/components/comment-form";
import ShareLinks from "@/components/share-links";
import { blogPostsData } from "@/constants/data";
import { shuffleArray } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaLinkedin } from "react-icons/fa6";

type SingleBlogPageProps = {
    params: {
        blogSlug: string;
    };
}

export default function SingleBlogPage({params}: SingleBlogPageProps) {
    const blogPost = blogPostsData.find((blog) => blog.slug === params.blogSlug);

    if (!blogPost) {
        return notFound();
    }
    
    const {title,createdAt,author,authorImg,authorBio,images} = blogPost

    const formatedDate = format(new Date(createdAt), "MMMM dd, yyyy");

    // ## Temporary dummy shuffle blogs 
    const shuffledBlogs = shuffleArray(blogPostsData);
const randomBlogs = shuffledBlogs.slice(0, 3);
    
  return (
    <>
      <div className=" relative min-h-[30%] w-full px-4 pb-32 pt-[calc(50px+var(--header-height))] md:px-8 lg:px-16">
        <Image
          src="/images/main-background.jpg"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={50}
        />
        <div className="absolute inset-0 bg-[#16202a]/40"></div>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10  text-start ">
          <h1 className="text-clamp-lg     font-bold text-white">
           {title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-[#ccd1d9] md:text-lg xl:text-xl">
            <Image
              src={authorImg}
              width={40}
              height={40}
              alt={"Author Image"}
              className="rounded-full"
            />
            <span className=" font-semibold text-primary ">{author}</span>{" "}
            <span>&diams;</span>
            <span className="">{formatedDate}</span>
          </div>
        </div>
      </div>
      <section className="relative   bg-[#f4f8fa] px-4 py-20 md:px-8 md:pb-24  lg:px-16">
        <div className="relative mx-auto flex max-w-7xl flex-col-reverse gap-10 lg:flex-row-reverse lg:gap-20">
          <aside className="sticky top-4 flex h-full flex-col gap-8 bg-white p-8 shadow-md">
            <h3 className="text-xl font-semibold text-[#16202a]">
              Share this on
            </h3>
            <ShareLinks />
            <h3 className="text-xl font-semibold text-[#16202a]">
              Most Popular
            </h3>
            <ul className="grid gap-5 xs:grid-cols-2 lg:grid-cols-1">
              {randomBlogs.map((blog) => (
                <li key={blog.id}>
                  <BlogCard {...blog} />
                </li>
              ))}
            </ul>
          </aside>
          <div>
            <article className="relative flex translate-y-[-150px] flex-col gap-6 text-[1rem] leading-8 text-[#5a5a67]">
              <div className="relative aspect-square shadow-md">
                <Image
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  src={images[0]}
                  className="object-cover"
                  alt=""
                />
              </div>
              <p className="">
                In today’s fast-paced business landscape, uncertainty isn’t just
                a factor—it’s the name of the game. For this reason, staying
                ahead of the curve isn’t a luxury; it’s a necessity. The secret
                weapon for mastering this unpredictable terrain? Key Performance
                Indicators (KPIs). These powerful metrics are like the GPS for
                your business, offering real-time insights that guide your
                decisions and propel your company toward success. In this blog
                post, we’ll uncover how to consolidate your data for
                crystal-clear dashboards, pinpoint the leading industry KPIs and
                metrics, and harness these insights to make accurate
                predictions, turning uncertainty into your competitive
                advantage.
              </p>
              <h2 className="text-clamp-sm font-semibold text-[#16202a]">
                MASTERING THE ART OF DATA: TRANSFORM YOUR DASHBOARD INTO A
                POWERHOUSE
              </h2>
              <p>
                Imagine navigating a ship through stormy seas with a foggy
                windshield. Perilous, isn’t it? Running a business without clear
                data visibility is just as treacherous. The solution? Clear that
                foggy windshield by consolidating your data. First, connect all
                your data sources. This involves integrating software systems,
                databases, and spreadsheets into a unified platform, creating a
                comprehensive view of your business operations. Next, focus on
                data cleanliness. Just as clutter is unwelcome in your attic,
                it’s equally unwelcome in your data. Ensure your data is
                accurate, up-to-date, and free from duplicates. Consider this
                step akin to tidying up before important guests arrive – tedious
                but essential. Implement data governance policies to maintain
                this cleanliness over time, establishing standards for data
                entry, storage, and maintenance. Once your data is consolidated
                and clean, leverage your company dashboards to visualize this
                information effectively. Dashboards transform raw data into
                actionable insights. Customize them to highlight the KPIs that
                matter most to your business. A well-organized dashboard is like
                a well-organized wardrobe – everything is in its place, easy to
                find, and ready to impress.
              </p>
              <h2 className="text-clamp-sm font-semibold text-[#16202a]">
                KPI MAGIC: UNLOCKING INDUSTRY LEADING INDICATORS FOR SUCCESS
              </h2>
              <p>
                With your data crystal clear, the next step is identifying the
                right KPIs to monitor. KPIs are the compass that guides your
                business decisions, so choosing the right ones is crucial. Start
                by identifying leading indicators in your industry. Leading
                indicators predict future performance rather than just
                reflecting past performance. A hotel manager seeking to identify
                industry-level KPIs in the service industry, could start by
                examining industry standards, customer expectations, and
                benchmarks set by competitors. Key performance indicators for
                the hotel industry often include metrics such as occupancy
                rates, average daily rate (ADR), revenue per available room
                (RevPAR), guest satisfaction scores, and online reviews. These
                indicators offer insights into the hotel’s performance and
                competitiveness within the industry. To align industry-level
                KPIs with company-level KPIs, focus on identifying metrics that
                directly contribute to achieving the hotel’s strategic
                objectives and mission. For example, if the hotel aims to
                enhance guest experience and loyalty, industry-level KPIs such
                as guest satisfaction scores can align with company-level KPIs
                related to repeat bookings and customer retention rates.
                Regularly review and adjust KPIs based on changing business
                goals, market dynamics, and guest preferences to ensure
                alignment and continued performance improvement. By syncing
                industry and company KPIs, hotel managers can effectively
                measure progress, make savvy decisions, and maintain a
                competitive edge in the service industry.
              </p>

              <div className="relative aspect-square">
                <Image
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  src={images[1]}
                  className="object-cover"
                  alt=""
                />
              </div>

              <h2 className="text-clamp-sm font-semibold text-[#16202a]">
                PREDICT AND COMPETE: HARNESSING INDUSTRY KPIS AND DATA FOR A
                WINNING EDGE
              </h2>
              <p>
                With your data consolidated and key KPIs identified, it’s time
                to put this information to work. The goal? To make accurate
                predictions and stay one step ahead of the competition. First,
                dive into your historical data to identify trends and patterns.
                This retrospective analysis can shed light on your current
                performance and help you understand the factors driving your
                business outcomes. Next, bring out the big guns with predictive
                analytics. This involves using statistical algorithms and
                machine learning techniques to analyze historical data and
                predict future events. Like a crystal ball, but with more math
                and fewer mystics. This approach can help you anticipate market
                trends, customer behavior, and potential challenges, allowing
                you to make proactive decisions. For example, imagine you’re
                running a company during an election period, navigating the
                choppy waters of uncertain political times. By identifying
                industry-level KPIs such as consumer confidence indices and
                political sentiment analysis and consolidating relevant company
                data like sales trends and customer feedback, you can adjust
                your strategies proactively. This might mean ramping up
                marketing efforts in stable regions or diversifying product
                offerings to dodge potential risks from policy changes. Finally,
                use your consolidated data and industry KPIs to conduct
                competitive analysis. Benchmark your performance against
                industry standards and competitors to pinpoint where you excel
                and where you need a little boost. This analysis can reveal gaps
                in your strategy and highlight opportunities for differentiation
              </p>

              <h2 className="text-clamp-sm font-semibold text-[#16202a]">
                CONCLUSION: KPIS – YOUR STRATEGIC ADVANTAGE IN UNCERTAIN TIMES
              </h2>
              <p>
                In a world where uncertainty is the only constant, KPIs stand as
                your reliable guide through the fog. By consolidating your data,
                identifying the right KPIs, and leveraging predictive analytics,
                you can make informed decisions that propel your business
                forward. Consider the following case: a prominent hotel chain
                aimed to boost guest satisfaction and increase repeat bookings.
                They focused on KPIs like guest satisfaction scores, room
                occupancy rates, and online reviews. Data revealed dips in
                satisfaction during peak seasons, linked to long check-in times
                and understaffed front desks. To address this, the hotel added
                staff during busy periods, installed self-service kiosks, and
                launched a mobile app for online check-ins. After these changes,
                KPIs showed a significant rise in guest satisfaction and glowing
                reviews. This move not only enhanced the guest experience but
                also increased occupancy rates. By aligning their KPIs with
                their business objectives and using data to inform their
                actions, the hotel chain was able to manoeuvre effectively in
                uncertain terrain and gain a competitive edge. This is the power
                of KPIs: they enable you to measure what matters, act on what
                works, and thrive in any situation. As you navigate the complex
                business landscape, remember that even the greatest achievements
                start with clear, measurable goals. So, seize this tool, drive
                with precision, and turn your business potential into tangible
                success!
              </p>
            </article>
            <div className="flex w-full -translate-y-16 flex-col items-start gap-5 bg-white p-4 shadow-md xs:flex-row">
              <Image
                src={authorImg}
                width={80}
                height={80}
                alt="Author Image"
                className="aspect-square  object-cover"
              />
              <div className="flex flex-1 flex-col gap-2">
                <span className="text-xl font-semibold text-[#16202a]">
                  {author}
                </span>
                <span className="text-sm font-light uppercase tracking-wide text-[#898a8e]">
                  About author
                </span>
                <p className="font-light italic leading-8 text-[#5a5a67]">
                  {authorBio}
                </p>
                <a href={""} target="__blank">
                  <span className="sr-only">
                    Link to {"member.role"} LinkedIn profile
                  </span>
                  <FaLinkedin className="size-8 cursor-pointer transition-colors hover:text-primary" />
                </a>
              </div>
            </div>
            <CommentForm />
          </div>
        </div>
      </section>
    </>
  );
}
