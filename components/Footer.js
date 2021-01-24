import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-simple-icons/github";
import linkedinIcon from "@iconify/icons-simple-icons/linkedin";
import twitterIcon from "@iconify/icons-simple-icons/twitter";

function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-24 text-gray-600 border-t border-purple-500">
            <nav className="flex flex-row">
                <a className="mr-6" href="https://github.com/">
                    <Icon className="w-6 h-6" icon={githubIcon} />
                </a>
                <a className="mr-6" href="https://www.linkedin.com/">
                    <Icon className="w-6 h-6" icon={linkedinIcon} />
                </a>
                <a href="https://www.twitter.com/">
                    <Icon className="w-6 h-6" icon={twitterIcon} />
                </a>
            </nav>
            <div className="mt-2">
                All content © Me
          </div>
        </footer>
    )
}

export default Footer;