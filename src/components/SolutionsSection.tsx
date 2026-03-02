import { Calendar, Users, Bell, Database, MessageSquare, GraduationCap, BookOpen, CreditCard, ClipboardCheck, Send, Briefcase } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentClass: string;
}

const SolutionCard = ({ icon: Icon, title, description, accentClass }: SolutionCardProps) => (
  <div className="bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${accentClass}`}>
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="text-foreground font-semibold mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const businessSolutions = [
  { icon: Calendar, title: "Booking System", description: "Easily schedule and track appointments", accent: "text-blue bg-blue-light" },
  { icon: Users, title: "Customer Follow-Up System", description: "Automated reminders for clients", accent: "text-green bg-green-light" },
  { icon: Bell, title: "Reminder Automation", description: "Never miss important tasks", accent: "text-orange bg-orange-light" },
  { icon: Database, title: "Customer Record Tracking", description: "Keep all client info in one place", accent: "text-teal bg-teal-light" },
  { icon: MessageSquare, title: "Feedback Collection System", description: "Collect reviews easily", accent: "text-blue bg-blue-light" },
];

const educationSolutions = [
  { icon: GraduationCap, title: "Admission Tracking", description: "Keep all student inquiries organized", accent: "text-green bg-green-light" },
  { icon: BookOpen, title: "Student Record System", description: "Maintain academic and personal info", accent: "text-blue bg-blue-light" },
  { icon: CreditCard, title: "Fee Reminder System", description: "Automatic alerts for pending payments", accent: "text-orange bg-orange-light" },
  { icon: ClipboardCheck, title: "Attendance Tracking", description: "Monitor student attendance easily", accent: "text-teal bg-teal-light" },
  { icon: Send, title: "Communication System", description: "Send updates to students & parents", accent: "text-green bg-green-light" },
  { icon: Briefcase, title: "Placement Tracking", description: "Track student career progress", accent: "text-blue bg-blue-light" },
];

const SolutionsSection = () => (
  <section className="px-6 py-20 surface-cool">
    <div className="max-w-4xl mx-auto">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1.5 h-8 bg-blue rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Business Solutions</h2>
        </div>
        <p className="text-muted-foreground mb-8 ml-5">Systems built for small and growing businesses</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {businessSolutions.map((s) => (
            <SolutionCard key={s.title} icon={s.icon} title={s.title} description={s.description} accentClass={s.accent} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1.5 h-8 bg-green rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Education Workflow Solutions</h2>
        </div>
        <p className="text-muted-foreground mb-8 ml-5">Designed for schools, colleges and training institutes</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {educationSolutions.map((s) => (
            <SolutionCard key={s.title} icon={s.icon} title={s.title} description={s.description} accentClass={s.accent} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SolutionsSection;
