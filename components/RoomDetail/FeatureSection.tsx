import { RoomType } from '@/interface'
import BookingSection from './BookingSection'
import Image from 'next/image'

import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsDoorClosed } from 'react-icons/bs'
import { AiOutlineDesktop } from 'react-icons/ai'

import { FeatureDesc } from '@/constants'

export default function FeatureSection({ data }: { data: RoomType }) {
  return (
    <div className="md:grid md:grid-cols-3 gap-8 mt-8 relative">
      <div className="col-span-2">
        <div className="flex items-center justify-between px-4">
          <div>
            <h1 className="text-lg md:text-xl">
              {data?.user?.name ?? '사용자'}님이 호스팅하는 숙소
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              {data?.user?.desc ?? '호스트 설명이 없습니다.'}
            </p>
          </div>
          <Image
            src={data?.user?.image || '/images/user-icon.png'}
            alt="user log"
            width={50}
            height={50}
            className="rounded-full shadow"
          />
        </div>
        <div className="mt-4 flex flex-col gap-6 py-6 border-y border-gray-300">
          <div className="flex gap-6 items-center px-4">
            <AiOutlineCheckCircle className="text-lg md:text-2xl" />
            <div>
              <div className="font-semibold">무료 취소</div>
              <div className="text-sm text-gray-400">
                {data?.freeCancel
                  ? FeatureDesc.FREE_CANCEL
                  : FeatureDesc.PAID_CANCEL}
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center px-4">
            <BsDoorClosed className="text-lg md:text-2xl" />
            <div>
              <div className="font-semibold">셀프 체크인</div>
              <div className="text-sm text-gray-400">
                {data?.selfCheckIn
                  ? FeatureDesc.SELF_CHECKIN
                  : FeatureDesc.SELF_CHECKIN_DISALLOWED}
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center px-4">
            <AiOutlineDesktop className="text-lg md:text-2xl" />
            <div>
              <div className="font-semibold">사무 시설</div>
              <div className="text-sm text-gray-400">
                {data?.officeSpace
                  ? FeatureDesc.HAS_OFFICE_SPACE
                  : FeatureDesc.NO_OFFICE_SPACE}
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-8 border-b border-gray-300 leading-8 text-gray-800">
          <h1 className="font-semibold text-xl md-2">숙소 설명</h1>
          {data?.desc ?? '설명이 없습니다.'}
        </div>
        <div className="px-4 py-8 border-b border-gray-300 leading-8 text-gray-800">
          <h1 className="font-semibold text-xl md-2">숙박 장소</h1>
          {data?.bedroomDesc ?? '설명이 없습니다.'}
        </div>
      </div>
      <BookingSection data={data} />
    </div>
  )
}
