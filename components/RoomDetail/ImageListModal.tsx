import { BLUR_DATA_URL } from '@/constants'
import { RoomType } from '@/interface'
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import Image from 'next/image'
import { Fragment, SetStateAction, useState } from 'react'

export default function ImageListModal({
  isOpen,
  closeModal,
  data,
}: {
  isOpen: boolean
  closeModal: () => void
  data: RoomType
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fiexd inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <DialogPanel className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-xl md:text-2xl font-medium leading-6 text-gray-900"
                  >
                    이미지 전체 보기
                  </DialogTitle>
                  <div className="mt-10 mb-20 max-w-xl mx-auto flex flex-col gap-4">
                    {data?.images?.map((img) => (
                      <Image
                        key={img}
                        alt="room img"
                        src={img}
                        width={1000}
                        height={1000}
                        className="mx-auto"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                      />
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      닫기
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

//   return (
//     <>
//       <button
//         onClick={openModal}
//         className="absolute right-6 bottom-8 bg-white text-black rounded-md px-4 py-1.5 text-sm border-black flex gap-2 items-center hover:shadow-lg"
//       >
//         <AiOutlineUnorderedList />
//         사진 모두 보기
//       </button>
//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-10" onClose={closeModal}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black/25" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4 text-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
//                   <button
//                     className="rounded-full p-2 hover:bg-black/5 mb-4"
//                     onClick={closeModal}
//                   >
//                     <AiOutlineClose />
//                   </button>
//                   <Dialog.Title
//                     as="h3"
//                     className="text-xl md:text-2xl font-medium leading-6 text-gray-900"
//                   >
//                     이미지 전체 보기
//                   </Dialog.Title>

//                   <div className="flex flex-col gap-4 mt-10 mb-20 max-w-xl mx-auto">
//                     {data?.images?.length > 0 ? (
//                       data?.images?.map((img) => (
//                         <Image
//                           key={img}
//                           src={img}
//                           alt="room img"
//                           width={1000}
//                           height={1000}
//                           style={{ objectFit: 'cover' }}
//                           className="mx-auto"
//                           placeholder="blur"
//                           blurDataURL={BLUR_DATA_URL}
//                         />
//                       ))
//                     ) : (
//                       <div className="text-center text-gray-500">
//                         등록된 숙소 이미지가 없습니다.
//                       </div>
//                     )}
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   )
// }
