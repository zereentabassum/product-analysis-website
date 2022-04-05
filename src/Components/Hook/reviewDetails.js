
const reviewDetails = () => {
    
const reviewInfos = [
    {
        name: "Robert Cruse",
        review:"The camera that I bought from here is great. It is very easy to use. I can take very high quality pictures from it.",
        rating: 4,
        id: 1
    },
    {
        name: "Alex Grint",
        review:"Wow! The camera is absolutely awesome. The camera has so many features. The pictures taken from it are crystal cleared. I loved this product.",
        rating: 5,
        id: 2
    },
    {
        name: "Danial Smith",
        review:"A very good product. Fun and easy to use with lots of features. Would have been even better if there were more facilities.",
        rating: 4,
        id: 3
    },
    {
        name: "Jackson john",
        review:"A great camera which gives you the freedom to take high quality photos very easily",
        rating: 4.5,
        id: 4
    },
    {
        name: "Emma Johnson",
        review:"I really loved this. Now I can take pictures like a professional photographer. Thanks for this amazing product.",
        rating: 5,
        id: 5
    },
    {
        name: "Annie Williams",
        review:"Good product with a reasonable price. I liked it.",
        rating: 4,
        id: 6
    }
]
    console.log(reviewInfos.name);
    // console.log(reviewInfos);
    const reviewList = reviewInfos.map(reviewInfo=> reviewInfo={reviewInfo})
    console.log(reviewList);
    // console.log([a,b,c,d]);
    return  reviewList;
    }

    export default reviewDetails;