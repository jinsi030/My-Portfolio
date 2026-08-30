import React from 'react';
import { Download, Linkedin, Github, Mail, Phone, MapPin, Printer, ArrowLeft, ExternalLink } from 'lucide-react';
import { RESUME_DATA } from '../data/interests';
import { WORK_EXPERIENCES } from '../data/timeline';

export const ResumeView: React.FC<{ onBackToFunVersion: () => void }> = ({ onBackToFunVersion }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Top Recruiter Control Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#DCCDD1] pb-4 print:hidden">
          <button
            onClick={onBackToFunVersion}
            className="inline-flex items-center gap-1.5 text-xs font-technical text-[#756A70] hover:text-[#351C35] cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to interactive portfolio
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#351C35] text-white text-xs font-technical cursor-pointer hover:bg-[#21151F] shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save PDF
            </button>

            <a
              href={RESUME_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#DCCDD1] bg-white text-xs font-technical text-[#351C35] hover:bg-[#E9C8CF]/30"
            >
              <Linkedin className="w-3.5 h-3.5" /> View LinkedIn <ExternalLink className="w-3 h-3 text-[#756A70]" />
            </a>
          </div>
        </div>

        {/* Small Editorial Note */}
        <div className="text-xs font-technical text-[#756A70] text-center print:hidden">
          “Prefer the fun version? You’re already on it.”
        </div>

        {/* The Clean, Restrained Resume Sheet */}
        <div className="bg-white rounded-2xl border border-[#DCCDD1] p-8 sm:p-12 space-y-10 shadow-xs print:border-none print:p-0 print:shadow-none">
          {/* Header */}
          <div className="border-b border-[#21151F]/15 pb-8 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#21151F]">
                  {RESUME_DATA.name}
                </h1>
                <div className="text-base font-semibold text-[#351C35] tracking-wide mt-1">
                  {RESUME_DATA.title.toUpperCase()}
                </div>
                <div className="text-xs text-[#756A70] font-technical">
                  {RESUME_DATA.secondaryTitle}
                </div>
              </div>

              {/* Contact Info Matrix */}
              <div className="text-xs text-[#756A70] space-y-1 sm:text-right font-technical">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#351C35]" />
                  <span>{RESUME_DATA.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#351C35]" />
                  <span>{RESUME_DATA.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#351C35]" />
                  <span>{RESUME_DATA.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-3 pt-1">
                  <span className="text-[#351C35]">linkedin.com/in/jinsivirvadiya</span>
                  <span className="text-[#351C35]">github.com/jinisi030</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-sm text-[#21151F] leading-relaxed pt-3 font-editorial">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-technical uppercase tracking-widest text-[#756A70] border-b border-[#DCCDD1] pb-1 font-bold">
              Work Experience
            </h2>

            <div className="space-y-6">
              {WORK_EXPERIENCES.map((job, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <strong className="text-sm text-[#21151F]">{job.role}</strong>
                      <span className="text-[#756A70]"> — {job.company}</span>
                    </div>
                    <span className="font-technical text-[#756A70]">{job.period} · {job.location}</span>
                  </div>

                  <p className="text-xs text-[#756A70] font-editorial leading-relaxed">
                    {job.description}
                  </p>

                  <ul className="space-y-1 pl-3 text-xs text-[#21151F]">
                    {job.highlights.map((h, i) => (
                      <li key={i} className="list-disc leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-technical uppercase tracking-widest text-[#756A70] border-b border-[#DCCDD1] pb-1 font-bold">
              Education
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
              <div>
                <strong className="text-sm text-[#21151F]">
                  {RESUME_DATA.education.degree}
                </strong>
                <div className="text-[#756A70]">{RESUME_DATA.education.institution}</div>
              </div>
              <span className="font-technical text-[#756A70]">{RESUME_DATA.education.period}</span>
            </div>
          </div>

          {/* Skills & Stack */}
          <div className="space-y-4">
            <h2 className="text-xs font-technical uppercase tracking-widest text-[#756A70] border-b border-[#DCCDD1] pb-1 font-bold">
              Skills & Tooling
            </h2>

            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[#FBF7F5] border border-[#DCCDD1] text-xs font-technical text-[#21151F]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h2 className="text-xs font-technical uppercase tracking-widest text-[#756A70] border-b border-[#DCCDD1] pb-1 font-bold">
              Languages
            </h2>

            <div className="flex gap-6 text-xs font-technical text-[#21151F]">
              {RESUME_DATA.languages.map((lang, idx) => (
                <div key={idx}>
                  <strong>{lang.language}:</strong> <span className="text-[#756A70]">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
