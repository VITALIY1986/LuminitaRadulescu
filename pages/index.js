import Image from "next/image";
import Meta from "../components/Meta";
import Post from "../components/Post";
import Animate from "../components/Animate";
import Heading from "../components/Heading";
import Magazine from "../components/Magazine";
import { Block, Row, Col } from "../components/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination } from "swiper";
import ReactPlayer from 'react-player'
import { getAllPostsForHome } from '../lib/api'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// Magazine cover image


function Fashion({ preview, allPosts }) {
    const morePosts = allPosts  
    const AvtorBlogSort = allPosts.filter(word => word.author.name === 'Gabriela');
    const Avtor = AvtorBlogSort[0].coverImage.url
    const AvtorTitle = AvtorBlogSort[0].title
   
    return (
        <>
<Meta />
            <Magazine>
            <Magazine.Cover image={Avtor}   unoptimized={true}>
                    <Heading className="absolute left-4 md:left-8 bottom-40 md:bottom-20">
                        <Animate name="fadeIn" delay="1.2s" duration="2s">
                            <Heading.Title>
                                <h1 className="text-white text-5xl font-extrabold leading-tight ">
                                {AvtorTitle}
                                </h1>
                            </Heading.Title>
                            <Heading.Subtitle>
                          
                                <p className="text-white">
                                Medic specialist 
                                    <br />
                                    în otorinolaringologie
                                    <br />
                                    <b className="text-xs text-white">Strada Pantelimon Halipa 14, Iași 700661</b>
                                </p>
                            
                        </Heading.Subtitle>
                        </Animate>
                    </Heading>
                    <div className="absolute right-3 md:right-8 bottom-20">
                        <Animate name="fadeIn" delay="1.2s" duration="2s">
                            <Image className="App-logo" src="/assets/images/other/most-popular-yellow.png" width={90} height={90} alt="travel" />
                        </Animate>
                    </div>
                    <Magazine.Footer className="absolute bottom-6 w-100" color="#fff" />
                </Magazine.Cover>
              







             












                <Magazine.Content>
                    <Block className="py-24 px-4 md:px-8 pb-20 xl:pb-52">
                        <Heading>
                            <Heading.Title>
                                <h2 className="xl:absolute lg:left-8 xl:-left-32 right-8 text-4xl md:text-5xl font-extrabold  leading-tight text-white">
                                    <span  style={{ color: " #c88861" }}>Lorem Ipsum is simply dummy text  </span>
                                    <span style={{ color: "#702b55" }}>of the printing and typesetting industry.</span>
                                </h2>
                            </Heading.Title>
                        </Heading>
                    </Block>
                    <Block className="py-24 px-4 md:px-8 pb-20 xl:pb-52">
                    <ReactPlayer url="https://www.youtube.com/watch?v=LdqOnbY1sjc"  controls  width='100%'/>
                    </Block>
                    <Block className="py-24 px-4 md:px-8">
                        <Swiper modules={[SwiperPagination]} pagination={{ clickable: true }} className="swiper--light">
                            {morePosts &&
                                morePosts
                                .filter(item => item.author.name !== 'Gabriela' )
                                .map((item) => (
                                    <SwiperSlide key={item.slug}>
                                        <Post post={item} model={2} max_words={22} image_width={555} image_height={555}  />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </Block>
  <Block className="px-4 md:px-8 pb-8">
                        <Row className="row row-md row--alt">
                            {morePosts &&
                                 morePosts
                                .filter(item => item.author.name !== 'Gabriela' )
                                .map((item, index) => (
                                    <Col key={item.slug} className="col-12">
                                        <Animate name="fadeInUpXs" delay={`${index + 3}00ms`} duration="1.8s">
                                            <Post post={item} model={2} max_words={14} image_width={600} image_height={600} image_quality={100} hover="move-in-left" />
                                        </Animate>
                                    </Col>
                                ))}
                        </Row>
                    </Block>
                    <Block className="px-8 pb-8">
                        <Heading className="text-center">
                            <Heading.Title>
                                <h2 className="text-45 text-2xl md:text-5xl font-extrabold leading-tight mb-8">
                                    <span>Follow us on </span>
                                    <span style={{ color: "#d10000" }}>Instagram</span>
                                    <br></br>
                                    <span>Lorem Ipsum</span>
                                </h2>
                            </Heading.Title>
                            <Heading.Subtitle>
                                <div>
                                    <a href="#" rel="no-follow">
                                        <Image src="/assets/images/icons/instagram.png" alt="Instagram Logo" width={64} height={64} />
                                    </a>
                                </div>
                            </Heading.Subtitle>
                        </Heading>
                    </Block>
                </Magazine.Content>
            </Magazine>
        </>
    );
}
export async function getStaticProps({ preview = false }) {
    const allPosts = (await getAllPostsForHome(preview)) ?? []
    return {
      props: { preview, allPosts },
    }
  }
export default Fashion;