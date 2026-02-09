import Image from "next/image";
import socials from "../data/social.json";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        {/* Top divider */}
        <div className="mt-2 mb-10 md:mb-20">
          <hr className="border-t border-neutral-300" />
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left */}
          <div className="lg:col-span-6 md:pr-24">
            <h3 className="font-display text-display-sm md:text-display-lg font-normal pb-4">
              Start Building Something You’ll Love
            </h3>
            <a
              href="https://wa.me/919501799936"
              target="_blank"
              rel="noreferrer"
              className="font-display text-display-sm md:text-display-lg italic text-primary-600 underline"
            >
              Send us a hi
            </a>
          </div>

          {/* Right */}
          <div className="lg:col-span-6 flex flex-col gap-8 lg:pl-48 xl:pl-80">
            <div className="flex flex-col gap-2">
              <p className="font-display text-display-xs font-normal">
                Saarth Buildtech Private Limited, Chandigarh, Punjab, India
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-body-sm font-light text-neutral-900">
                Email us at
              </p>
              <a
                href="mailto:info@saarthbuildtech.in"
                className="font-display text-display-xs font-normal text-primary-600"
              >
                info@saarthbuildtech.in
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-body-sm font-light text-neutral-900">
                If you&apos;re hurry, quick call for us
              </p>
              <a
                href="tel:+919501799936"
                className="font-display text-display-xs font-normal text-primary-600"
              >
                +91 9501799936
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="my-10 md:my-20">
          <hr className="border-t border-neutral-300" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-8 md:mb-20 mb-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-body-md font-light">
            © {new Date().getFullYear()} Saarth Buildtech Private Limited –
            Quality construction & renovation experts.
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-center">
            <div className="flex items-center opacity-70">
              <p className="pr-4 text-body-sm font-semibold tracking-widest text-neutral-700">
                CONNECT
              </p>
              <hr className="w-16 border-t border-neutral-700" />
            </div>

            <div className="flex items-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={40}
                    height={40}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
