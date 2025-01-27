'use client'

export default function Snapshot() {
  const features = [
    {
      icon: '📹',
      title: 'Daily Live',
      description: 'Interactive classes',
    },
    {
      icon: '📄',
      title: '10 Million +',
      description: 'Tests, sample papers & notes',
    },
    {
      icon: '❓',
      title: '24 x 7',
      description: 'Doubt solving sessions',
    },
    {
      icon: '🏅',
      title: '100 +',
      description: 'Offline centres',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-fadeinup">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center shadow-md p-6 rounded-lg hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-blue-500 mb-2">{feature.title}</h3>
              <p className="text-sm text-green-800 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
