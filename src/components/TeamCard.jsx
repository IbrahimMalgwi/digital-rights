import React from 'react';

const TeamCard = ({ member }) => {
    return (
        <div className="group text-center bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100">
            <div className="relative mb-6">
                {member.image ? (
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary-100">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                ) : (
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                )}
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary-400 transition-colors duration-300"></div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

            <div className="flex justify-center space-x-4">
                <a href={member.social.linkedin} className="text-gray-400 hover:text-primary-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
                <a href={member.social.twitter} className="text-gray-400 hover:text-primary-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default TeamCard;