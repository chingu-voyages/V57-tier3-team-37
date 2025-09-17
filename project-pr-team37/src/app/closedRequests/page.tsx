import React from 'react'
import Filter from '../components/filter'

export default function ClosedRequests() {
  return (
    <div className="h-screen">
      <Filter />

      <div className="px-10 mt-10">

        <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8 space-y-4 lg:space-y-0 justify-between">
          <h1 className="font-bold text-4xl">Closed Pull Requests</h1>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0">
            <input
              type="text"
              placeholder="Search Closed PRs..."
              className="w-full max-w-[256px] bg-[#161b22] border border-[#30363D] rounded-lg pl-4 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="flex ml-6 font-bold w-[106px] text-sm h-[38px] bg-[#161b22] border border-[#30363D] rounded-lg">
              <option value="All Authors">All Authors</option>
            </select>
            <select className="flex ml-6 font-bold w-[159px] text-sm h-[38px] bg-[#161b22] border border-[#30363D] rounded-lg">
              <option value="All Types">All Types</option>
            </select>
            <select className="flex ml-6 font-bold w-[166px] text-sm h-[38px] bg-[#161b22] border border-[#30363D] rounded-lg">
              <option value="Sort by Closed Date">Sort by Closed Date</option>
            </select>
          </div>
        </div>

        <div
          id="pullRequestBlocks"
          className="flex-wrap justify-start p-4 rounded-lg bg-[#161b22] border-l border-l-red-400 border-t border-t-[#30363D] border-b border-b-[#30363D] border-r border-r-[#30363D]"
        >
          <h1 className="mb-4 font-bold text-xl">Some # and the title of the pull request</h1>
          <h2>
            by name created on some day, closed some odd number of days ago, this many hours old
          </h2>
          <a className="text-sm">👥</a>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-900 text-blue-200 border border-blue-700">
            mike-reviewer
          </span>
          <button className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium max-w-full border border-blue-700 text-blue-200 bg-blue-900">
            Name and title
          </button>
        </div>
      </div>
    </div>
  );
}
