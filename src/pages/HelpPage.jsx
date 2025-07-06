import React from 'react';
import { Collapse } from 'antd';
import { CarOutlined, MoneyCollectOutlined, SolutionOutlined, PhoneOutlined } from '@ant-design/icons';
import DetailHero from '../components/DetailHero.jsx';
import PageHero from '../components/PageHero.jsx';

const { Panel } = Collapse;

const faqData = [
    {
        key: '1',
        title: 'Bagaimana cara membeli mobil di Showcar Buleleng?',
        content: 'Anda bisa langsung datang ke showroom kami di Buleleng atau menghubungi tim sales kami melalui WhatsApp. Anda juga bisa mengajukan penawaran langsung melalui halaman detail mobil di website ini.',
        icon: <CarOutlined />
    },
    {
        key: '2',
        title: 'Apakah saya bisa melakukan test drive?',
        content: 'Tentu saja. Kami sangat menyarankan Anda untuk melakukan test drive. Silakan hubungi kami untuk menjadwalkan waktu yang paling sesuai untuk Anda. Kami juga melayani permintaan "Home Test Drive" untuk area Buleleng dan sekitarnya.',
        icon: <SolutionOutlined />
    },
    {
        key: '3',
        title: 'Metode pembayaran apa saja yang diterima?',
        content: 'Kami menerima pembayaran tunai, transfer bank, dan juga menyediakan fasilitas kredit melalui rekanan leasing terpercaya kami. Tim kami siap membantu proses pengajuan kredit Anda.',
        icon: <MoneyCollectOutlined />
    },
    {
        key: '4',
        title: 'Apakah semua mobil di sini bergaransi?',
        content: 'Betul. Semua mobil bekas kami telah lulus inspeksi ketat dan kami memberikan garansi 30 hari untuk mesin dan transmisi untuk memberikan Anda ketenangan dalam berkendara.',
        icon: <CarOutlined />
    }
];

const HelpPage = () => {
  return (
    <>
        <PageHero
        title="Pusat Bantuan"
        desc="Punya pertanyaan? Kami siap membantu. Temukan jawaban Anda di bawah ini."
      />
    <div className="bg-white">
        <div className=" max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pb-16 pt-5">
            <div className="bg-white p-8 rounded-xl shadow-lg border">
                <Collapse accordion defaultActiveKey={['']} bordered={false} className="bg-white">
                    {faqData.map(faq => (
                        <Panel 
                            header={
                                <span className="font-semibold text-lg flex items-center gap-3">
                                    {faq.icon} {faq.title}
                                </span>
                            } 
                            key={faq.key}
                            className="bg-gray-50 mb-4 rounded-lg"
                        >
                            <p className="text-gray-700 pl-8">{faq.content}</p>
                        </Panel>
                    ))}
                </Collapse>
            </div>
        </div>
    </div>
    </>
  );
};

export default HelpPage;
