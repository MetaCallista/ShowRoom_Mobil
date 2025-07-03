import React from 'react';
import { StarFilled } from '@ant-design/icons';
import { Progress, Input, Button, Form } from 'antd';

const { TextArea } = Input;

const ReviewSection = ({ reviews }) => {
  // Jika tidak ada review, tampilkan komponen form saja
  if (!reviews || reviews.length === 0) {
    return (
      <div className="pt-4">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Ulasan</h2>
        <p className="text-gray-600 mb-6">Belum ada ulasan untuk mobil ini. Jadilah yang pertama memberi ulasan!</p>
        <AddReviewForm />
      </div>
    );
  }

  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="pt-4">
      <h2 className="text-2xl font-bold mb-4 pb-2 border-b">{reviews.length} Ulasan</h2>
      <div className="flex items-center gap-4 mb-8 p-4 border rounded-lg bg-gray-50">
        <div className="flex flex-col items-center justify-center border-2 border-blue-500 rounded-full w-24 h-24 flex-shrink-0">
          <p className="text-3xl font-bold">{averageRating}</p>
          <p className="text-xs text-gray-500">dari 5</p>
        </div>
        <div className="flex-grow space-y-2">
          <div className="flex items-center gap-4"><span className="w-24 md:w-32">Komunikasi</span> <Progress percent={100} showInfo={false} /></div>
          <div className="flex items-center gap-4"><span className="w-24 md:w-32">Akurasi</span> <Progress percent={80} showInfo={false} /></div>
          <div className="flex items-center gap-4"><span className="w-24 md:w-32">Lokasi</span> <Progress percent={90} showInfo={false} /></div>
        </div>
      </div>

      {reviews.map(review => (
        <div key={review.id} className="border-b py-6">
          <div className="flex items-center gap-4">
            <img src="/assets/images/seller-avatar.png" alt={review.author} className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="font-bold">{review.author}</h4>
              <p className="text-xs text-gray-500">{review.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-yellow-500 my-3">
            {[...Array(review.rating)].map((_, i) => <StarFilled key={i} />)}
          </div>
          <p className="text-gray-600">{review.text}</p>
        </div>
      ))}

      <AddReviewForm />
    </div>
  );
};

// Komponen Form terpisah agar lebih rapi
const AddReviewForm = () => {
  return (
    <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Tambahkan Ulasan</h3>
        <Form layout="vertical">
          <Form.Item name="comment" label="Ulasan Anda">
            <TextArea rows={4} placeholder="Tulis ulasan Anda di sini..."/>
          </Form.Item>
          <Button type="primary" htmlType="submit">Kirim Ulasan</Button>
        </Form>
    </div>
  );
};

export default ReviewSection;