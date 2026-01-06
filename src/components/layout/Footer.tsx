import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { personalData } from '@/data/personal'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/20 border-t border-white py-8 text-center dark:border-gray-700">
      <div className="container mx-auto px-4">
        {/* Site Name */}
        <h3 className="text-foreground mb-4 text-2xl font-bold">
          {personalData.name}
        </h3>

        {/* Tagline */}
        <p className="text-muted-foreground mx-auto mb-6 max-w-xl">
          Passionate about creating elegant solutions and building exceptional
          digital experiences.
        </p>

        {/* Social Links */}
        <div className="mb-8 flex justify-center gap-4">
          <a
            href={personalData.socialParams.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background text-muted-foreground hover:bg-primary rounded-full p-3 shadow-sm transition-colors hover:text-white"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href={personalData.socialParams.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background text-muted-foreground hover:bg-primary rounded-full p-3 shadow-sm transition-colors hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={personalData.socialParams.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background text-muted-foreground hover:bg-primary rounded-full p-3 shadow-sm transition-colors hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={personalData.socialParams.email}
            className="bg-background text-muted-foreground hover:bg-primary rounded-full p-3 shadow-sm transition-colors hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-border border-t pt-4">
          <p className="text-muted-foreground text-sm">
            Copyright ©{' '}
            <strong className="text-foreground">{personalData.name}</strong>{' '}
            {currentYear}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
