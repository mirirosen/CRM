import Link from 'next/link';

export default function Home() {
  const navigationItems = [
    {
      title: 'Leads',
      description: 'Manage and track potential customers',
      href: '/leads',
      color: 'bg-blue-700 hover:bg-blue-800',
      icon: '📊',
      stats: '12 New',
    },
    {
      title: 'Contacts',
      description: 'View and manage your contacts',
      href: '/contacts',
      color: 'bg-blue-600 hover:bg-blue-700',
      icon: '👥',
      stats: '45 Active',
    },
    {
      title: 'Conversations',
      description: 'View all customer conversations',
      href: '/conversations',
      color: 'bg-blue-500 hover:bg-blue-600',
      icon: '💬',
      stats: '8 Recent',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-700">CRM System</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/leads" className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                Leads
              </Link>
              <Link href="/contacts" className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                Contacts
              </Link>
              <Link href="/conversations" className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                Conversations
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Your CRM
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage your leads, contacts, and conversations in one place. Get insights and grow your business efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block group"
            >
              <div className={`${item.color} rounded-lg shadow-lg p-8 transition-all duration-200 transform group-hover:scale-105 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <h2 className="text-2xl font-bold text-white">
                    {item.title}
                  </h2>
                </div>
                <p className="text-white/90 mb-4">
                  {item.description}
                </p>
                <div className="text-white/80 text-sm font-medium">
                  {item.stats}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Quick Stats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-700">New Leads</h3>
                  <span className="text-blue-700">📈</span>
                </div>
                <p className="text-3xl font-bold text-blue-700">12</p>
                <p className="text-sm text-gray-500 mt-2">+3 from last week</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-700">Active Contacts</h3>
                  <span className="text-blue-600">👥</span>
                </div>
                <p className="text-3xl font-bold text-blue-600">45</p>
                <p className="text-sm text-gray-500 mt-2">+5 from last week</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-700">Recent Conversations</h3>
                  <span className="text-blue-500">💬</span>
                </div>
                <p className="text-3xl font-bold text-blue-500">8</p>
                <p className="text-sm text-gray-500 mt-2">+2 from last week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-500 transition-colors text-left">
              <span className="text-blue-700 text-lg">➕</span>
              <p className="font-medium text-gray-700 mt-2">Add New Lead</p>
            </button>
            <button className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-500 transition-colors text-left">
              <span className="text-blue-700 text-lg">📝</span>
              <p className="font-medium text-gray-700 mt-2">Create Note</p>
            </button>
            <button className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-500 transition-colors text-left">
              <span className="text-blue-700 text-lg">📅</span>
              <p className="font-medium text-gray-700 mt-2">Schedule Meeting</p>
            </button>
            <button className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-500 transition-colors text-left">
              <span className="text-blue-700 text-lg">📊</span>
              <p className="font-medium text-gray-700 mt-2">View Reports</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
