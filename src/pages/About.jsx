const About = () => {
	return (
		<>
			<div className="flex items-center justify-center pt-20 lg:pt-44">
				<div className="flex flex-col items-center sm:flex-row sm:items-start mx-4 sm:mx-40">
					<img
						src="/images/Open Peeps - Bust.png"
						className="w-32 sm:w-64"
						alt="Image"
					/>
					<div className="text-4xl ml-4 text-left sm:ml-8">
						<p className="text-4xl">About</p>
						<p className="pt-8 text-2xl">
							I'm currently in the midst of a career transition with a passion
							for web development. I'm pursuing part-time studies at Republic
							Polytechnic in Specialist Diploma program for User Experience in
							Infocomm Technology.
						</p>
						<p className="text-2xl">
							I have some years of experience in application <s>desktop</s>{" "}
							support and back-end development.
						</p>
						<div className="pt-8">Skills</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
