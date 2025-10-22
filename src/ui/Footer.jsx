/* eslint-disable jsx-a11y/anchor-is-valid */
function Footer() {
    return (
        <footer className="bg-[#0D1B2A] text-white py-12 w-screen -mx-[6%] px-4 lg:px-8 mt-10">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-4" style={{fontFamily: 'Kalnia, serif'}}>
                            NIRVA
                        </h2>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-md">
                            Crafted essentials for your everyday life. From elegant Men's essentials and distinctive Women's pieces, to comfortable Kids' apparel.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Home</a></li>
                            <li><a href="/men" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Men</a></li>
                            <li><a href="/women" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Women</a></li>
                            <li><a href="/kids" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Kids</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Contact Us</a></li>
                            <li><a href="/shipping" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Shipping Info</a></li>
                            <li><a href="/returns" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Returns</a></li>
                            <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">FAQ</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="border-t border-gray-700 pt-8 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a 
                                    href="https://www.instagram.com/nirva_store_/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-pink-500 transition-colors text-sm lg:text-base flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                    Instagram
                                </a>
                                <a 
                                    href="https://www.facebook.com/profile.php?id=61581032570099" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-600 transition-colors text-sm lg:text-base flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                    Facebook
                                </a>
                                <a 
                                    href="#" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-black transition-colors text-sm lg:text-base flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                    </svg>
                                    TikTok
                                </a>
                                <a 
                                    href="mailto:contact@nirva.com" 
                                    className="text-gray-300 hover:text-red-500 transition-colors text-sm lg:text-base flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z"/>
                                    </svg>
                                    Gmail
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-sm lg:text-base">
                            © 2025 NIRVA. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base">Privacy Policy</a>
                            <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
