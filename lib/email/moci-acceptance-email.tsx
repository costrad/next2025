import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import {
	Body,
	Container,
	Head,
	Html,
	Link,
	Preview,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";

interface MOCIAcceptanceEmailProps {
	previewText?: string;
	name?: string;
	startDate?: string;
	endDate?: string;
	startTime?: string;
	endTime?: string;
	theme?: string;
}

export const MOCIAcceptanceEmail = ({
	previewText = `Your Acceptance & Zoom Access Pass: MOCI ${new Date().getFullYear()}`,
	name = "Participant",
	startDate,
	endDate,
	startTime,
	endTime,
	theme = "RECOVERING THE FUTURE, TODAY.",
}: MOCIAcceptanceEmailProps) => {
	const currentYear = new Date().getFullYear();

	return (
		<Tailwind>
			<Html>
				<Head>
					<style>{`
            @media screen and (max-width: 700px) {
              .desktop-table { display: none !important; }
              .mobile-cards { display: block !important; }
            }
          `}</style>
				</Head>
				<Preview>{previewText}</Preview>
				<Body className="mx-auto my-auto bg-[#fdfdfd] px-2 font-sans text-[#333333]">
					<Container className="mx-auto my-[40px] max-w-[700px] bg-white p-[20px] border border-solid border-[#eaeaea] rounded">
						<Text className="text-[16px] font-bold mt-0">Shalom {name}!</Text>

						<Text className="text-[14px] leading-[24px]">
							Welcome to the Future of Communication! Your payment has been
							successfully received, and we are pleased to formally issue your
							acceptance pass for the{" "}
							<strong>
								{currentYear} Edition of the Media of Communication Institute
								(MOCI)
							</strong>
							.
						</Text>

						<Text className="text-[14px] leading-[24px]">
							This programme is proudly brought to you by the{" "}
							<strong>
								College of Sustainable Transformation and Development (COSTrAD)
							</strong>{" "}
							and its Presidency. Get ready to engage with visionary
							communicators, media strategists, AI innovators, and change-makers
							who are reshaping how the world communicates.
						</Text>

						{/* Key Topics Box */}
						<Section className="bg-[#f9f9f9] border-l-4 border-solid border-[#59168b] p-[15px] my-[20px]">
							<Text className="m-0 mb-[8px] text-[14px] leading-[24px]">
								<strong>Theme:</strong> {theme}
							</Text>
							<Text className="m-0 mb-[8px] text-[14px] leading-[24px]">
								<strong>Key Topics:</strong>
							</Text>
							<Text className="m-0 ml-[8px] text-[14px] leading-[26px]">
								• The Parable of the Sower
								<br />• Brand Equity: Equitable Societal Restoration
								<br />• The Psychology of Marketing
								<br />• Artificial Intelligence &amp; Human Communication
							</Text>
							<Text className="m-0 mb-[8px] mt-[10px] text-[14px] leading-[24px]">
								<strong>Dates:</strong> {startDate} – {endDate}
							</Text>
							<Text className="m-0 mb-[8px] text-[14px] leading-[24px]">
								<strong>Daily Schedule:</strong> {startTime || "4:00 PM"} –{" "}
								{endTime || "7:00 PM"} GMT (UTC+0 / Accra Time)
							</Text>
							<Text className="m-0 text-[14px] leading-[24px]">
								<strong>Location:</strong> Dedicated Virtual Meeting Platform
								(Zoom)
							</Text>
						</Section>

						{/* Crucial Security Info */}
						<div className="flex items-center gap-[8px] mt-[25px]">
							<ExclamationTriangleIcon className="w-[18px] h-[18px] text-[#c0392b] shrink-0" />
							<Text className="m-0 text-[14px] font-bold text-[#c0392b] uppercase tracking-wide">
								Strict Entry Requirement:
							</Text>
						</div>
						<Text className="text-[14px] leading-[22px] mt-[4px] mb-[20px] bg-[#fdf2f2] p-[12px] border border-solid border-[#f5c6cb] rounded text-[#a94442]">
							To be granted access from the waiting room, you{" "}
							<strong>MUST</strong> join the meeting with your display name
							formatted exactly as:{" "}
							<strong>[(First Name + Last Name) with Country]</strong>.<br />
							<span className="italic font-bold">
								Example: Naa Amartey Ghana
							</span>
						</Text>

						{/* --- ZOOM ACCESS PASS CREDENTIALS --- */}
						<Section className="bg-[#f1f7fe] border border-solid border-[#b3d7ff] rounded p-[20px] my-[25px]">
							<Text className="m-0 mb-[12px] text-[16px] font-bold text-[#59168b] text-center">
								MEDIA OF COMMUNICATION INSTITUTE (MOCI) ZOOM MEETING LINK
							</Text>

							<div className="text-center my-[15px]">
								<Link
									href="https://us02web.zoom.us/j/89489030415?pwd=7bn0QWfIKDdBUJFSfbJy0HlGbbwSsA.1"
									className="bg-[#59168b] text-white px-[20px] py-[10px] rounded font-bold text-[14px] inline-block no-underline"
								>
									Click Here to Join Zoom Meeting
								</Link>
							</div>

							<Text className="m-0 mb-[16px] text-[13px] font-bold tracking-wider text-[#64748b] uppercase text-center">
								Virtual Access Credentials
							</Text>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] my-[25px]">
								{/* Meeting ID Block */}
								<div className="bg-white border border-solid border-[#e2e8f0] rounded-md p-[16px] text-center">
									<Text className="m-0 text-[11px] font-bold uppercase tracking-wider text-[#94a3b8] mb-[4px]">
										Meeting ID
									</Text>
									<Text className="m-0 font-mono text-[16px] font-semibold text-[#1e293b] tracking-wide select-all">
										894 8903 0415
									</Text>
								</div>

								{/* Schedule Block */}
								<div className="bg-white border border-solid border-[#e2e8f0] rounded-md p-[16px] text-center">
									<Text className="m-0 text-[11px] font-bold uppercase tracking-wider text-[#94a3b8] mb-[4px]">
										Schedule
									</Text>
									<Text className="m-0 font-mono text-[14px] font-semibold text-[#1e293b] tracking-wide">
										Oct 12–17, {currentYear}
									</Text>
									<Text className="m-0 text-[12px] text-[#64748b]">
										16:00 UTC Daily
									</Text>
								</div>
							</div>
						</Section>

						<Text className="mt-[25px] text-[14px] leading-[24px]">
							At MOCI {currentYear}, you will gain insightful discussions on
							media, communication, branding, AI, and human impact — alongside
							powerful networking opportunities and transformational learning
							experiences.
						</Text>

						<Text className="mt-[25px] text-[14px] leading-[24px]">
							We look forward to a highly impactful engagement.
						</Text>

						<Text className="mt-[30px] text-[14px] leading-[18px]">
							Warm regards,
							<br />
							<strong>COSTrAD Administration Team</strong>
						</Text>

						<Text className="text-xs text-gray-600 mt-6">
							If you have any questions or need further clarification about your
							registration, please don't hesitate to contact us. Our support
							team ({" "}
							<a
								className="text-primary"
								href="mailto:correspondence@costrad.org"
							>
								correspondence@costrad.org
							</a>{" "}
							| Phone:{" "}
							<a className="text-primary" href="tel:+233200201334">
								+233 20 020 1334
							</a>{" "}
							— Office Hours: Mon–Fri, 9AM–4PM GMT (UTC+0 / Accra Time)) is
							always available to assist you.
						</Text>
					</Container>
				</Body>
			</Html>
		</Tailwind>
	);
};

MOCIAcceptanceEmail.PreviewProps = {
	previewText: `Your Acceptance & Zoom Access Pass: MOCI ${new Date().getFullYear()}`,
} as MOCIAcceptanceEmailProps;

export default MOCIAcceptanceEmail;
