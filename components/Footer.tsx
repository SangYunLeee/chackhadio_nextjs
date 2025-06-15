import { Content } from '@/type/type';
import contentJson from '@/data/content.json';

export default async function Footer() {
  const content: Content = contentJson;
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 py-6 sm:py-8 md:py-10 text-white px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Contact Info */}
      <div className="max-w-7xl mx-auto">
        <div className="text-[0.8em] sm:text-[1.0em] md:text-[1.0em] text-center">
          <div className="mb-4 sm:mb-6">
            {content.about.address}
          </div>
          <div className="flex flex-col gap-2 sm:gap-2 items-center">
            <div className="flex items-center">
              <span className="font-medium">TEL</span>
              <span className="mx-2 text-gray-500">❘</span>
              <span>{content.about.contact.phone[0].phone}</span>
              <span className="mx-2 text-gray-600">·</span>
              <span>{content.about.contact.phone[1].phone}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">E-mail</span>
              <span className="mx-2 text-gray-500">❘</span>
              <span>{content.about.contact.email}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Business license</span>
              <span className="mx-2 text-gray-500">❘</span>
              <span>{content.about.contact.license}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
