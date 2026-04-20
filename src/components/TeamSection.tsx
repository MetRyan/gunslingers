import React from 'react';
import { motion } from 'motion/react';
import { FC } from 'react';

interface Member {
  name: string;
  role: string;
  number?: string;
  image: string;
  isCoach?: boolean;
}

const teamData: Member[] = [
  {
    name: 'COACH NGUYEN',
    role: 'HEAD COACH',
    image: 'https://picsum.photos/seed/coach/800/1200',
    isCoach: true
  },
  {
    name: 'JACKSON SLINGER',
    role: 'QUARTERBACK',
    number: '01',
    image: 'https://picsum.photos/seed/player-1/800/1200'
  },
  {
    name: 'MARCUS SPEED',
    role: 'WIDE RECEIVER',
    number: '07',
    image: 'https://picsum.photos/seed/player-2/800/1200'
  },
  {
    name: 'DAVI SHARP',
    role: 'CORNERBACK',
    number: '12',
    image: 'https://picsum.photos/seed/player-3/800/1200'
  },
  {
    name: 'TYSON POWER',
    role: 'LINEBACKER',
    number: '44',
    image: 'https://picsum.photos/seed/player-4/800/1200'
  },
  {
    name: 'LEO FLOW',
    role: 'WIDERECEIVER',
    number: '10',
    image: 'https://picsum.photos/seed/player-5/800/1200'
  }
];

export const TeamSection: FC = () => {
  const coach = teamData.find(m => m.isCoach);
  const members = teamData.filter(m => !m.isCoach);

  return (
    <section id="team-section" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-primary font-bold text-xs tracking-[0.3em] mb-2 uppercase">Leadership</p>
          <h2 className="text-5xl md:text-8xl">THE COMMAND</h2>
        </div>

        {/* Coach Highlight */}
        {coach && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img 
                src={coach.image} 
                alt={coach.name} 
                className="w-full h-full object-cover brightness-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-primary p-6">
                <span className="text-xs font-bold tracking-[0.2em] text-white opacity-80 uppercase">Head Coach</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-6xl md:text-8xl mb-6">{coach.name}</h3>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8 max-w-md">
                Leading the Gunslingers with a philosophy of precision, discipline, and high-fashion intensity. Transforming the game one strategy at a time.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-[1px] bg-primary mt-3" />
                <span className="text-[10px] font-bold tracking-[0.2em] opacity-50 uppercase">THE ARCHITECT OF THE NEW ERA</span>
              </div>
            </motion.div>
          </div>
        )}

        {/* Members Grid */}
        <div className="mb-12">
          <p className="text-primary font-bold text-xs tracking-[0.3em] mb-2 uppercase">The Squad</p>
          <h2 className="text-5xl md:text-8xl mb-16">ROSTER</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border border border-border">
          {members.map((member, idx) => (
            <PlayerMemberCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PlayerMemberCard: FC<{ member: Member }> = ({ member }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="relative aspect-[3/4] bg-background overflow-hidden group cursor-pointer"
    >
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90 brightness-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <span className="text-8xl md:text-9xl font-black text-stroke opacity-20 group-hover:opacity-100 transition-opacity">
          {member.number || 'GS'}
        </span>
        <div>
          <h3 className="text-3xl md:text-5xl group-hover:text-primary transition-colors uppercase leading-none break-words">
            {member.name.split(' ')[0]} <br /> {member.name.split(' ')[1]}
          </h3>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 text-white">
            POSITION: {member.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
