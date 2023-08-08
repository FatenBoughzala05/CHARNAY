import React, { useEffect, useRef } from 'react'
// import '../styles/StarRating.css'
function StarRating({ onChange }) {
  const elRef = useRef();

  useEffect(() => {
    if (elRef.current) {
      elRef.current.addEventListener("change", updateRating);

      return () => {
        elRef.current.removeEventListener("change", updateRating);
      };
    }
  }, []);

  const ratings = [
    { id: 1, name: "Terrible" },
    { id: 2, name: "Bad" },
    { id: 3, name: "OK" },
    { id: 4, name: "Good" },
    { id: 5, name: "Excellent" }
  ];

  let rating = null;

  // init();

  // function init() {
  //   if(elRef.current){

  //     elRef.current.addEventListener("change", updateRating);
  //     // stop Firefox from preserving form data between refreshes
  //     try {
  //       elRef.current.reset();
  //     } catch (err) {
  //       console.error("Element isn't a form.");
  //     }
  //   }
  //   }


  function updateRating(e) {
    const selectedRating = +e.target.value;
    onChange(selectedRating);
    // clear animation delays
    if(elRef.current){

      Array.from(elRef.current?.querySelectorAll(`[for*="rating"]`)).forEach((el) => {
        el.classNameName = "rating__label";
      });
    }

    const ratingObject = ratings.find((r) => r.id === +e.target.value);
    const prevRatingID = rating?.id || 0;

    let delay = 0;
    rating = ratingObject;
    ratings.forEach((rating) => {
      const { id } = rating;

      // add the delays
      const ratingLabel = elRef.current?.querySelector(`[for="rating-${id}"]`);
      if (ratingLabel) { 
      if (id > prevRatingID + 1 && id <= rating.id) {
        ++delay;
        ratingLabel.classNameList.add(`rating__label--delay${delay}`);
      }
    }

      // hide ratings to not read, show the one to read
      const ratingTextEl = elRef.current?.querySelector(`[data-rating="${id}"]`);
        if (ratingTextEl) {
          if (rating.id !== id) ratingTextEl.setAttribute("hidden", true);
          else ratingTextEl.removeAttribute("hidden");
        }});
          
        
  }
    
    // className StarRating {
    //     constructor(qs) {
    //         this.ratings = [
    //             {id: 1, name: "Terrible"},
    //             {id: 2, name: "Bad"},
    //             {id: 3, name: "OK"},
    //             {id: 4, name: "Good"},
    //             {id: 5, name: "Excellent"}
    //         ];
    //         this.rating = null;
    //         this.el = document.querySelector(qs);
    
    //         this.init();
    //     }
    //     init() {
    //         this.el?.addEventListener("change",this.updateRating.bind(this));
    
    //         // stop Firefox from preserving form data between refreshes
    //         try {
    //             this.el?.reset();
    //         } catch (err) {
    //             console.error("Element isn’t a form.");
    //         }
    //     }
    //     updateRating(e) {
    //         // clear animation delays
    //         Array.from(this.el.querySelectorAll(`[for*="rating"]`)).forEach(el => {
    //             el.classNameName = "rating__label";
    //         });
    
    //         const ratingObject = this.ratings.find(r => r.id === +e.target.value);
    //         const prevRatingID = this.rating?.id || 0;
    
    //         let delay = 0;
    //         this.rating = ratingObject;
    //         this.ratings.forEach(rating => {
    //             const { id } = rating;
    
    //             // add the delays
    //             const ratingLabel = this.el.querySelector(`[for="rating-${id}"]`);
    
    //             if (id > prevRatingID + 1 && id <= this.rating.id) {
    //                 ++delay;
    //                 ratingLabel.classNameList.add(`rating__label--delay${delay}`);
    //             }
    
    //             // hide ratings to not read, show the one to read
    //             const ratingTextEl = this.el.querySelector(`[data-rating="${id}"]`);
    
    //             if (this.rating.id !== id)
    //                 ratingTextEl.setAttribute("hidden",true);
    //             else
    //                 ratingTextEl.removeAttribute("hidden");
    //         });
    //     }
    // }
  return (
  <form className="rating">
    
    <div className="rating__stars">
		<input id="rating-1" className="rating__input rating__input-1" type="radio" name="rating" value="1"  onClick={updateRating}/>
		<input id="rating-2" className="rating__input rating__input-2" type="radio" name="rating" value="2"  onClick={updateRating}/>
		<input id="rating-3" className="rating__input rating__input-3" type="radio" name="rating" value="3"  onClick={updateRating}/>
		<input id="rating-4" className="rating__input rating__input-4" type="radio" name="rating" value="4"  onClick={updateRating}/>
		<input id="rating-5" className="rating__input rating__input-5" type="radio" name="rating" value="5"  onClick={updateRating}/>
		<label className="rating__label" for="rating-1">
			<svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
				<g transform="translate(16,16)">
					<circle className="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
				</g>
				<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<g transform="translate(16,16) rotate(180)">
						<polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
						<polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
					</g>
					<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
						<polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
					</g>
				</g>
			</svg>
			<span className="rating__sr">1 star—Terrible</span>
		</label>
		<label className="rating__label" for="rating-2">
			<svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
				<g transform="translate(16,16)">
					<circle className="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
				</g>
				<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<g transform="translate(16,16) rotate(180)">
						<polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
						<polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
					</g>
					<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
						<polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
					</g>
				</g>
			</svg>
			<span className="rating__sr">2 stars—Bad</span>
		</label>
		<label className="rating__label" for="rating-3">
			<svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
				<g transform="translate(16,16)">
					<circle className="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
				</g>
				<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<g transform="translate(16,16) rotate(180)">
						<polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
						<polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
					</g>
					<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
						<polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
					</g>
				</g>
			</svg>
			<span className="rating__sr">3 stars—OK</span>
		</label>
		<label className="rating__label" for="rating-4">
			<svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
				<g transform="translate(16,16)">
					<circle className="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
				</g>
				<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<g transform="translate(16,16) rotate(180)">
						<polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
						<polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
					</g>
					<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
						<polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
					</g>
				</g>
			</svg>
			<span className="rating__sr">4 stars—Good</span>
		</label>
		<label className="rating__label" for="rating-5">
			<svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
				<g transform="translate(16,16)">
					<circle className="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
				</g>
				<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<g transform="translate(16,16) rotate(180)">
						<polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
						<polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
					</g>
					<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
						<polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
						<polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
					</g>
				</g>
			</svg>
			<span className="rating__sr">5 stars—Excellent</span>
		</label>
		<p className="rating__display" data-rating="1" hidden>Terrible</p>
		<p className="rating__display" data-rating="2" hidden>Bad</p>
		<p className="rating__display" data-rating="3" hidden>OK</p>
		<p className="rating__display" data-rating="4" hidden>Good</p>
		<p className="rating__display" data-rating="5" hidden>Excellent</p>
	</div>
    
    
  </form>
  )
}

export default StarRating













// import React, { useEffect, useState } from 'react';// // import '../styles/StarRating.css'
// //   useEffect(() => {
// //     // window.addEventListener("DOMContentLoaded",() => {
// //     const starRating = new StarRating('form');
// //   }, []);



// //   className StarRatingController {
// //     constructor(qs,onChange) {
    

// //     {/***** */  this.rating = null;
// //       this.el = document.querySelector(qs);

// //       this.init(onChange);
// //     }
// //     init(onChange) {
// //       this.el?.addEventListener('change', this.updateRating.bind(this));
// //               *////////////////////////////////////////}
// //       {/*****// stop Firefox from preserving form data between refreshes
// //       try {
// //         this.el?.reset();
// //       } catch (err) {
// //         console.error('Element isn’t a form.');
// //       }
// //       this.onChange = onChange;*////////////////////////}
// //     }
// //    {/*************** updateRating(e) {
// //         const selectedRating = +e.target.value;
// //   this.rating = this.ratings.find((r) => r.id === selectedRating);
// //   //setSelectedRating(selectedRating);
// //   this.onChange(selectedRating); *///////////////////////}


// //       // clear animation delays
// //       Array.from(this.el.querySelectorAll(`[for*="rating"]`)).forEach((el) => {
// //         el.classNameName = 'rating__label';
// //       });

// //       const ratingObject = this.ratings.find((r) => r.id === +e.target.value);
// //       const prevRatingID = this.rating?.id || 0;

// //       let delay = 0;
// //       this.rating = ratingObject;
// //       this.ratings.forEach((rating) => {
// //         const { id } = rating;

// //         // add the delays
// //         const ratingLabel = this.el.querySelector(`[for="rating-${id}"]`);

// //         if (id > prevRatingID + 1 && id <= this.rating.id) {
// //           ++delay;
// //           ratingLabel.classNameList.add(`rating__label--delay${delay}`);
// //         }

// //         // hide ratings to not read, show the one to read
// //         const ratingTextEl = this.el.querySelector(`[data-rating="${id}"]`);

// //         if (this.rating.id !== id) ratingTextEl.setAttribute('hidden', true);
// //         else ratingTextEl.removeAttribute('hidden');
// //       });
// //     }
// //   }
//   function StarRating({ value, onChange }) {
//     const ratings = [
//         { id: 1, name: 'Terrible' },
//         { id: 2, name: 'Bad' },
//         { id: 3, name: 'OK' },
//         { id: 4, name: 'Good' },
//         { id: 5, name: 'Excellent' },
//       ];
//     const [selectedRating, setSelectedRating] = useState(value);
   
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if (!selectedRating) {
//         alert('Please select a rating');
//         return;
//       }
//     };
//     const handleRatingChange = (e) => {
//       const selectedRating = e.target.value;
//       setSelectedRating(selectedRating);
//       onChange(selectedRating);
//     };
//     useEffect(() => {
//         const updateRating = (e) => {
//           const selectedRating = +e.target.value;
//           setSelectedRating(selectedRating);
//           onChange(selectedRating);
//         };
    
//         const el = document.querySelector('form');
//         el?.addEventListener('change', updateRating);
    
//         // stop Firefox from preserving form data between refreshes
//         try {
//           el?.reset();
//         } catch (err) {
//           console.error('Element isn’t a form.');
//         }
//         return () => {
//             el?.removeEventListener('change', updateRating);
//           };
//         }, [onChange]);
        
//     // useEffect(() => {
//     //     const starRating = new StarRatingController('form', onChange);
//     //   }, [onChange]);
  
//   return (
//     <form className="rating"onSubmit={handleSubmit} >
//       <div className="rating__stars">
        
//         <input
//           id="rating-1"
//           className="rating__input rating__input-1"
//           type="radio"
//           name="rating"
//           value="1"
//           checked={value === "1"}
//           onChange={handleRatingChange}
//         />
//         <input
//           id="rating-2"
//           className="rating__input rating__input-2"
//           type="radio"
//           name="rating"
//           value="2"
//           checked={value === "2"}
//           onChange={handleRatingChange}
//         />
//         <input
//           id="rating-3"
//           className="rating__input rating__input-3"
//           type="radio"
//           name="rating"
//           value="3"
//           checked={value === "3"}
//           onChange={handleRatingChange}
//         />
//         <input
//           id="rating-4"
//           className="rating__input rating__input-4"
//           type="radio"
//           name="rating"
//           value="4"
//           checked={value === "4"}
//           onChange={handleRatingChange}
//         />
//         <input
//           id="rating-5"
//           className="rating__input rating__input-5"
//           type="radio"
//           name="rating"
//           value="5"
//           checked={value === "5"}
//           onChange={handleRatingChange}
//         />
//         <label className="rating__label" for="rating-1">
//           <svg
//             className="rating__star"
//             width="32"
//             height="32"
//             viewBox="0 0 32 32"
//             aria-hidden="true"
//           >
//             <g transform="translate(16,16)">
//               <circle
//                 className="rating__star-ring"
//                 fill="none"
//                 stroke="#000"
//                 stroke-width="16"
//                 r="8"
//                 transform="scale(0)"
//               />
//             </g>
//             <g
//               stroke="#000"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             >
//               <g transform="translate(16,16) rotate(180)">
//                 <polygon
//                   className="rating__star-stroke"
//                   points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
//                   fill="none"
//                 />
//                 <polygon
//                   className="rating__star-fill"
//                   points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
//                   fill="#000"
//                 />
//               </g>
//               <g
//                 transform="translate(16,16)"
//                 stroke-dasharray="12 12"
//                 stroke-dashoffset="12"
//               >
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(0)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(72)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(144)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(216)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(288)"
//                   points="0 4,0 16"
//                 />
//               </g>
//             </g>
//           </svg>
//           <span className="rating__sr">1 star—Terrible</span>
//         </label>
//         <label className="rating__label" for="rating-2">
//           <svg
//             className="rating__star"
//             width="32"
//             height="32"
//             viewBox="0 0 32 32"
//             aria-hidden="true"
//           >
//             <g transform="translate(16,16)">
//               <circle
//                 className="rating__star-ring"
//                 fill="none"
//                 stroke="#000"
//                 stroke-width="16"
//                 r="8"
//                 transform="scale(0)"
//               />
//             </g>
//             <g
//               stroke="#000"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             >
//               <g transform="translate(16,16) rotate(180)">
//                 <polygon
//                   className="rating__star-stroke"
//                   points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
//                   fill="none"
//                 />
//                 <polygon
//                   className="rating__star-fill"
//                   points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
//                   fill="#000"
//                 />
//               </g>
//               <g
//                 transform="translate(16,16)"
//                 stroke-dasharray="12 12"
//                 stroke-dashoffset="12"
//               >
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(0)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(72)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(144)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(216)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(288)"
//                   points="0 4,0 16"
//                 />
//               </g>
//             </g>
//           </svg>
//           <span className="rating__sr">2 stars—Bad</span>
//         </label>
//         <label className="rating__label" for="rating-3">
//           <svg
//             className="rating__star"
//             width="32"
//             height="32"
//             viewBox="0 0 32 32"
//             aria-hidden="true"
//           >
//             <g transform="translate(16,16)">
//               <circle
//                 className="rating__star-ring"
//                 fill="none"
//                 stroke="#000"
//                 stroke-width="16"
//                 r="8"
//                 transform="scale(0)"
//               />
//             </g>
//             <g
//               stroke="#000"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             >
//               <g transform="translate(16,16) rotate(180)">
//                 <polygon
//                   className="rating__star-stroke"
//                   points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
//                   fill="none"
//                 />
//                 <polygon
//                   className="rating__star-fill"
//                   points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
//                   fill="#000"
//                 />
//               </g>
//               <g
//                 transform="translate(16,16)"
//                 stroke-dasharray="12 12"
//                 stroke-dashoffset="12"
//               >
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(0)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(72)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(144)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(216)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(288)"
//                   points="0 4,0 16"
//                 />
//               </g>
//             </g>
//           </svg>
//           <span className="rating__sr">3 stars—OK</span>
//         </label>
//         <label className="rating__label" for="rating-4">
//           <svg
//             className="rating__star"
//             width="32"
//             height="32"
//             viewBox="0 0 32 32"
//             aria-hidden="true"
//           >
//             <g transform="translate(16,16)">
//               <circle
//                 className="rating__star-ring"
//                 fill="none"
//                 stroke="#000"
//                 stroke-width="16"
//                 r="8"
//                 transform="scale(0)"
//               />
//             </g>
//             <g
//               stroke="#000"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             >
//               <g transform="translate(16,16) rotate(180)">
//                 <polygon
//                   className="rating__star-stroke"
//                   points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
//                   fill="none"
//                 />
//                 <polygon
//                   className="rating__star-fill"
//                   points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
//                   fill="#000"
//                 />
//               </g>
//               <g
//                 transform="translate(16,16)"
//                 stroke-dasharray="12 12"
//                 stroke-dashoffset="12"
//               >
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(0)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(72)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(144)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(216)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(288)"
//                   points="0 4,0 16"
//                 />
//               </g>
//             </g>
//           </svg>
//           <span className="rating__sr">4 stars—Good</span>
//         </label>
//         <label className="rating__label" for="rating-5">
//           <svg
//             className="rating__star"
//             width="32"
//             height="32"
//             viewBox="0 0 32 32"
//             aria-hidden="true"
//           >
//             <g transform="translate(16,16)">
//               <circle
//                 className="rating__star-ring"
//                 fill="none"
//                 stroke="#000"
//                 stroke-width="16"
//                 r="8"
//                 transform="scale(0)"
//               />
//             </g>
//             <g
//               stroke="#000"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             >
//               <g transform="translate(16,16) rotate(180)">
//                 <polygon
//                   className="rating__star-stroke"
//                   points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
//                   fill="none"
//                 />
//                 <polygon
//                   className="rating__star-fill"
//                   points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
//                   fill="#000"
//                 />
//               </g>
//               <g
//                 transform="translate(16,16)"
//                 stroke-dasharray="12 12"
//                 stroke-dashoffset="12"
//               >
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(0)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(72)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(144)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(216)"
//                   points="0 4,0 16"
//                 />
//                 <polyline
//                   className="rating__star-line"
//                   transform="rotate(288)"
//                   points="0 4,0 16"
//                 />
//               </g>
//             </g>
//           </svg>
//           <span className="rating__sr">5 stars—Excellent</span>
//         </label>
//         <p className="rating__display" data-rating="1" hidden>
//           Terrible
//         </p>
//         <p className="rating__display" data-rating="2" hidden>
//           Bad
//         </p>
//         <p className="rating__display" data-rating="3" hidden>
//           OK
//         </p>
//         <p className="rating__display" data-rating="4" hidden>
//           Good
//         </p>
//         <p className="rating__display" data-rating="5" hidden>
//           Excellent
//         </p>
//       </div>
      
//     </form>
//   );
// }

// export default StarRating;
