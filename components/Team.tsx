import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "John Miller",
    role: "Founder & CEO",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  },
  {
    name: "Sarah Davis",
    role: "CTO",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
  },
  {
    name: "Emma Wilson",
    role: "Marketing Head",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Our Expert Members
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Meet our talented team of professionals dedicated to making
            cryptocurrency trading accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 bg-card border-border text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-secondary">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={1080}
                  height={720}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                {member.role}
              </p>
              <div className="flex justify-center gap-2">
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
                >
                  <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
                >
                  <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
                >
                  <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
