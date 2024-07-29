"use client";
import React from "react";
import image from "../assets/sticker.webp";
import soll from "../assets/soll.jpg";
import slmen from "../assets/solmen.jpg";
import sol from "../assets/sol.jpg";
import "./body.css";
import Image from "next/image";
import {FaTwitter, FaTelegram} from "react-icons/fa";

function Body() {
	return (
		<div className='container-fluid mt-5 mb-3'>
			<div className='rowww'>
				<Image src={soll} alt='img' className='bgimg' />
				<div className='row aboutt'>
					<div
						data-aos='fade-in'
						className='col-9 m-auto d-flex p-sm-3 pt-3 text-dark'
					>
						<div>
							<h3 className='mt-5 mb-sm-2 mx-sm-0 text-center'>About Us</h3>
							<p className='about text-center'>
								Real Sol Men stood firm, their faces grim, their WILLS strong,
								their unwavering wallets. The market wavered, jeets selling but
								they held strong, their resolve as unshakeable whales made them
								be called REAL $SOLMEN. Their coin, $SOLMEN was a testament to
								their unwavering faith – a symbol of the true HODLer, who
								bought, held, and never faltered, no matter the storm. They knew
								that being a true $SOLMEN is not formed by Jeeting but in the
								enduring strength of being unshakable whales called the REAL
								$SOLMEN.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-4 meme'>
				<Image src={slmen} className='logo shadow' alt='logo' />

				<div className='socials my-4 w-100 bg-emerald-300'>
					<a href='https://t.me/+RTd-4yM_y6U4ZmRk' className='tg'>
						<FaTelegram size={"150px"} color='lilac' />
					</a>

					<a href='#' className='twitter'>
						<FaTwitter color='royalblue' size={"150px"} />
					</a>
				</div>

				<div className='roadmap'>
					<h5 className='mt-5'>Roadmap to Relaunch and Revitalize $SOLMEN</h5>
					<span className='fw-bold'>Week 1:</span> Creating Awareness and
					Building Momentum
					<br />
					<br />
					<p>
						- Day 1-2: Announcement & Transparency Release a detailed statement
						addressing the situation, outlining the steps we’re taking to
						resolve the issue, and introducing our roadmap for relaunch. Engage
						with the community through live Q&A sessions and interactive
						discussions to address concerns and build trust.
						<br />
						<br />
					</p>
					<p>
						- Day 3-4: Media Outreach & Partnership Announcements** Partner with
						industry influencers and media outlets to spread the word about our
						relaunch. Share articles, interviews, and updates across social
						media platforms to increase visibility and generate excitement.
						<br />
						<br />
					</p>
					<p>
						- Day 5-7: Community Engagement Campaigns Launch contests, AMAs (Ask
						Me Anything), and educational webinars to engage the community.
						Offer rewards for sharing information about the relaunch, referring
						friends, and participating in discussions.
					</p>
					<br />
					<br />
					<span className='fw-bold'>Week 2-5:</span> Private Presale Phase
					<br />
					<br />
					<p>
						<span className='fw-bold'>Week 2:</span> Private Sale Kickoff
						<p>
							Open the private presale to our most dedicated supporters and
							early adopters. Send out exclusive invitations and detailed
							information about the sale. Offer special incentives for early
							investment, such as bonus tokens or discounted rates.
						</p>
					</p>
					<p>
						<span className='fw-bold'>Week 3-4:</span>Community Building &
						Updates
						<br />
						Maintain momentum by sharing regular updates on the private presale
						progress. Highlight success stories and testimonials from early
						participants. Continue engaging with the community through exclusive
						events and interactive content.
					</p>
					<p>
						<span className='fw-bold'>Week 5:</span>Last Call for Private Sale
						<br />
						Announce the final week of the private presale. Use this opportunity
						to create a sense of urgency and excitement. Offer a final push with
						additional bonuses or limited-time incentives to encourage
						last-minute participation.
					</p>
					<br />
					<br />
					<p>
						<span className='fw-bold'>Week 6:</span>Public Presale Phase
					</p>
					<p>
						- Day 1-3: Public Presale Launch <br />
						Officially launch the public presale with clear instructions on how
						to participate. Leverage all communication channels to spread the
						word and attract a broad audience. Share success metrics from the
						private presale to build confidence.
					</p>
					<br />
					<p>
						- Day 4-5: Promotion & Engagement
						<br />
						Run targeted ads, influencer campaigns, and social media promotions
						to maximize reach and participation. Host live events, such as a
						countdown party or webinar, to generate buzz and excitement
					</p>
					<br />
					<p>
						- Day 6-7: Final Push & Closing <br />
						Execute a final promotional blitz to drive last-minute
						participation. Share final reminders and updates as the public
						presale comes to a close. Express gratitude to all participants and
						provide a preview of the next steps.
					</p>
					<br />
					<p>
						<span className='fw-bold'>Post-Presale</span>:Preparing for Launch
					</p>
					<p>
						<span className='fw-bold'>Week 7-8</span>:Post-Presale Preparation &
						Community Integration
						<br />
						Prepare for the official launch of the project. Finalize and test
						all systems, integrate feedback from presale participants, and
						continue engaging with the community to keep the momentum going.
						Provide detailed updates and build anticipation for the launch day.
						Let’s seize this opportunity to rebuild stronger and more vibrant
						than ever. Your dedication and enthusiasm are the driving force
						behind our success. Together, we will make this relaunch a
						remarkable milestone in our journey!
					</p>
				</div>
			</div>
		</div>
	);
}

export default Body;
