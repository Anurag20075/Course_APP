import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  FolderTree,
  Users,
  ClipboardList,
  ShoppingCart,
  Star,
  GraduationCap,
  Megaphone,
  Newspaper,
  Settings,
  Search,
  Bell,
  ChevronRight,
  ChevronDown,
  Upload,
  Link as LinkIcon,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  Paperclip,
  Check,
  Image as ImageIcon,
  DollarSign,
  Settings2,
  FileText,
  Clock
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

const fadeInChild = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 }
};

export default function AddCoursePage() {
  const [activeNav, setActiveNav] = useState('Courses');
  const [pricingType, setPricingType] = useState('paid');
  const [courseOptions, setCourseOptions] = useState({
    discussions: true,
    preview: true,
    certificate: true,
    search: true
  });
  const [isOnSale, setIsOnSale] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Courses', icon: BookOpen },
    { name: 'Categories', icon: FolderTree },
    { name: 'Students', icon: Users },
    { name: 'Enrollments', icon: ClipboardList },
    { name: 'Orders', icon: ShoppingCart },
    { name: 'Reviews', icon: Star },
    { name: 'Instructors', icon: GraduationCap },
    { name: 'Announcements', icon: Megaphone },
    { name: 'Blog', icon: Newspaper },
    { name: 'Settings', icon: Settings },
  ];

  const toggleOption = (key) => {
    setCourseOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full flex flex-col z-30">
        {/* Logo */}
        <div className="p-6 flex items-center gap-3">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900 leading-tight">SkillNova</h1>
            <p className="text-xs text-gray-500">Admin Dashboard</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeNav === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveNav(item.name)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-indigo-600' : 'text-gray-400'}`} />
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Admin Profile */}
        <div className="p-4 border-t border-gray-100">
          <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
              alt="Admin"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-gray-900">Admin</p>
              <p className="text-xs text-gray-500">admin@skillnova.com</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Top Header */}
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200 px-8 h-16 flex items-center justify-between">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500 font-medium">Courses</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-semibold">Add New Course</span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                3
              </span>
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
          >
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Add New Course</h1>
              <p className="text-gray-500 text-sm mt-1">Create a new course and publish it for students.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button className="px-5 py-2.5 rounded-lg border border-indigo-200 text-indigo-600 text-sm font-medium hover:bg-indigo-50 transition-colors">
                Save as Draft
              </button>
              <button className="px-6 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
                Publish Course
              </button>
            </div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Section 1: Basic Information */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900">1. Basic Information</h2>
                    <p className="text-sm text-gray-500 mt-0.5">Add the basic details of your course.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Course Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Title <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter course title"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
                        maxLength={100}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                        0/100
                      </span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Short Description <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        rows={3}
                        placeholder="Enter a short description about the course"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm resize-none"
                        maxLength={160}
                      />
                      <span className="absolute right-3 bottom-3 text-xs text-gray-400">
                        0/160
                      </span>
                    </div>
                  </div>

                  {/* Full Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Description <span className="text-red-500">*</span>
                    </label>
                    <div className="border border-gray-300 rounded-lg overflow-hidden">
                      {/* Toolbar */}
                      <div className="flex items-center gap-1 px-3 py-2 border-b border-gray-200 bg-gray-50">
                        <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200 text-sm text-gray-600">
                          Paragraph <ChevronDown className="w-3 h-3" />
                        </button>
                        <div className="w-px h-5 bg-gray-300 mx-1" />
                        <button className="p-1.5 rounded hover:bg-gray-200 text-gray-600"><Bold className="w-4 h-4" /></button>
                        <button className="p-1.5 rounded hover:bg-gray-200 text-gray-600"><Italic className="w-4 h-4" /></button>
                        <button className="p-1.5 rounded hover:bg-gray-200 text-gray-600"><Underline className="w-4 h-4" /></button>
                        <div className="w-px h-5 bg-gray-300 mx-1" />
                        <button className="p-1.5 rounded hover:bg-gray-200 text-gray-600"><List className="w-4 h-4" /></button>
                        <button className="p-1.5 rounded hover:bg-gray-200 text-gray-600"><ListOrdered className="w-4 h-4" /></button>
                        <button className="p-1.5 rounded hover:bg-gray-200 text-gray-600"><AlignLeft className="w-4 h-4" /></button>
                        <div className="w-px h-5 bg-gray-300 mx-1" />
                        <button className="p-1.5 rounded hover:bg-gray-200 text-gray-600"><Paperclip className="w-4 h-4" /></button>
                        <button className="p-1.5 rounded hover:bg-gray-200 text-gray-600"><LinkIcon className="w-4 h-4" /></button>
                      </div>
                      <textarea
                        rows={6}
                        placeholder="Write a detailed description about the course..."
                        className="w-full px-4 py-3 outline-none text-sm resize-none"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 2: Course Details */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900">2. Course Details</h2>
                    <p className="text-sm text-gray-500 mt-0.5">Add curriculum, level, language and other details.</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm appearance-none bg-white text-gray-500">
                        <option>Select category</option>
                        <option>Web Development</option>
                        <option>Backend</option>
                        <option>AI & ML</option>
                        <option>Career</option>
                        <option>Tools</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subcategory
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm appearance-none bg-white text-gray-500">
                        <option>Select subcategory</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Level <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm appearance-none bg-white text-gray-500">
                        <option>Select level</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Language <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm appearance-none bg-white text-gray-500">
                        <option>Select language</option>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Spanish</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Instructor <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm appearance-none bg-white text-gray-500">
                        <option>Select instructor</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Duration <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="e.g. 10 hours 30 minutes"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Side Panels */}
            <div className="space-y-6">
              {/* Section 3: Course Media */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0">
                    <ImageIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900">3. Course Media</h2>
                    <p className="text-sm text-gray-500 mt-0.5">Add a thumbnail image and promo video.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Thumbnail Image <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-400 hover:bg-indigo-50/30 transition-all cursor-pointer group">
                      <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-100 transition-colors">
                        <Upload className="w-5 h-5 text-indigo-600" />
                      </div>
                      <p className="text-sm font-medium text-indigo-600 mb-1">Upload Thumbnail</p>
                      <p className="text-xs text-gray-500">JPG, PNG or WEBP (16:9 ratio)</p>
                      <p className="text-xs text-gray-400">Recommended: 1280x720px</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Promo Video (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter YouTube or Vimeo link"
                        className="w-full px-4 py-2.5 pr-10 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
                      />
                      <LinkIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 4: Pricing */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0">
                    <DollarSign className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900">4. Pricing</h2>
                    <p className="text-sm text-gray-500 mt-0.5">Set the pricing for your course.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Free Course */}
                  <label
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${pricingType === 'free'
                        ? 'border-indigo-500 bg-indigo-50/50'
                        : 'border-gray-200 hover:border-gray-300'
                      }`}
                    onClick={() => setPricingType('free')}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${pricingType === 'free' ? 'border-indigo-600' : 'border-gray-300'
                      }`}>
                      {pricingType === 'free' && <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Free Course</p>
                      <p className="text-xs text-gray-500 mt-0.5">Make this course free for all students.</p>
                    </div>
                  </label>

                  {/* Paid Course */}
                  <label
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${pricingType === 'paid'
                        ? 'border-indigo-500 bg-indigo-50/50'
                        : 'border-gray-200 hover:border-gray-300'
                      }`}
                    onClick={() => setPricingType('paid')}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${pricingType === 'paid' ? 'border-indigo-600' : 'border-gray-300'
                      }`}>
                      {pricingType === 'paid' && <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Paid Course</p>
                      <p className="text-xs text-gray-500 mt-0.5 mb-3">Set a price for this course.</p>

                      {pricingType === 'paid' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="space-y-3"
                        >
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">₹</span>
                            <input
                              type="number"
                              defaultValue={999}
                              className="w-full pl-8 pr-12 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-medium">INR</span>
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5">
                              Discount Price (Optional)
                            </label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">₹</span>
                              <input
                                type="number"
                                defaultValue={699}
                                className="w-full pl-8 pr-12 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
                              />
                              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-medium">INR</span>
                            </div>
                          </div>

                          <label className="flex items-center gap-2 cursor-pointer">
                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isOnSale ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300'
                              }`}>
                              {isOnSale && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={isOnSale}
                              onChange={(e) => setIsOnSale(e.target.checked)}
                            />
                            <span className="text-sm text-gray-600">This course is on sale</span>
                          </label>
                        </motion.div>
                      )}
                    </div>
                  </label>
                </div>
              </motion.div>

              {/* Section 5: Course Options */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0">
                    <Settings2 className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900">5. Course Options</h2>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { key: 'discussions', label: 'Enable discussions' },
                    { key: 'preview', label: 'Allow students to preview this course' },
                    { key: 'certificate', label: 'Certificate on course completion' },
                    { key: 'search', label: 'Include course in search results' },
                  ].map((option) => (
                    <label
                      key={option.key}
                      className="flex items-center gap-3 cursor-pointer group"
                      onClick={() => toggleOption(option.key)}
                    >
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${courseOptions[option.key]
                          ? 'bg-indigo-600 border-indigo-600'
                          : 'border-gray-300 group-hover:border-gray-400'
                        }`}>
                        {courseOptions[option.key] && <Check className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={courseOptions[option.key]}
                        onChange={() => toggleOption(option.key)}
                      />
                      <span className={`text-sm ${courseOptions[option.key] ? 'text-gray-900' : 'text-gray-600'}`}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}