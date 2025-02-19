// main.js for reviewCarousel.html

// 다음 버튼을 누르면 유저 프로필/ 이름/ 리뷰가 다음 턴으로 넘어간다.

const $userPic = document.getElementById('userPic');
const $userName = document.getElementById('userName');
const $userOccup = document.getElementById('userOccup');
const $userReview = document.getElementById('textBox');
const $shuffleBtn = document.getElementById('shuffle');

let n = 0;

const user1 = {
    src: "./img/Frame_1.svg",
    firstName: "Salley",
    lastName: "Waterfowl",
    uOccup: "professor",
    uReview: "I recently tried out this new application, and I have to say, I’m pretty impressed! The setup was super easy, and I love how userfriendly the interface is. It didn’t take me long to figure out how to navigate through the features."
}
const user2 = {
    src: "./img/Frame_2.svg",
    firstName: "Harry",
    lastName: "Craftsman",
    uOccup: "researcher",
    uReview: "One of my favorite aspects is the way it organizes everything so neatly. Whether I’m looking for information or just trying to stay on top of my tasks, it really streamlines the process. There are a variety of customization options, which I appreciate because it lets me tailor the experience to fit my needs."
}
const user3 = {
    src: "./img/Frame_3.svg",
    firstName: "Cloudia",
    lastName: "Solar",
    uOccup: "analyst",
    uReview: "The performance has been smooth so far, with no annoying crashes or lagging. I also appreciate that it’s often updated with new features and improvements, showing that the developers are really engaged. Overall, I think this app is a great addition to my daily routine, and I’d definitely recommend giving it a try if you’re looking for something fresh and helpful!"
}
const user4 = {
    src: "./img/Frame_4.svg",
    firstName: "Curvy",
    lastName: "prime",
    uOccup: "soldier",
    uReview: "One of the best parts for me is the speed. It loads quickly, so I’m not waiting around staring at a loading screen. I also appreciate the customization options—being able to tweak a few settings to fit my preferences makes the experience much more enjoyable."
}
const user5 = {
    src: "./img/Frame_5.svg",
    firstName: "Cindy",
    lastName: "Bear",
    uOccup: "handyman",
    uReview: "I recently tried out this new application, and I have to say, I've been pretty impressed. The layout is clean and userfriendly, which makes it easy to navigate. I love how all the features are clearly laid out so you don’t have to go digging around to find what you need."
}
const user6 = {
    src: "./img/Frame_6.svg",
    firstName: "Kelley",
    lastName: "Woodlock",
    uOccup: "undertaker",
    uReview: "I recently tried out a new application, and I have to say, I’m quite impressed! The interface is clean and easy to navigate, which made getting started a breeze. I loved how intuitive everything felt; I didn’t have to spend ages figuring out where things were."
}
const user7 = {
    src: "./img/Frame_7.svg",
    firstName: "Samanda",
    lastName: "Dyck",
    uOccup: "bus driver",
    uReview: "If I had to nitpick, I would say some features could use a bit more explanation. A short tutorial would go a long way to help new users understand everything better."
}
const user8 = {
    src: "./img/Frame_8.svg",
    firstName: "Kailub",
    lastName: "Jackson",
    uOccup: "fisherman",
    uReview: "Performancewise, it runs smoothly without any noticeable lag. I’ve been using it daily for a couple of weeks, and it hasn’t crashed or frozen on me at all."
}
const user9 = {
    src: "./img/Frame_9.svg",
    firstName: "Caron",
    lastName: "Pedal",
    uOccup: "farmer",
    uReview: "One thing I noticed is that customer support is really responsive. I had a quick question and sent them a message; they got back to me within a few hours, which is always a good sign."
}
const user10 = {
    src: "./img/Frame_10.svg",
    firstName: "Sam",
    lastName: "Banker",
    uOccup: "cook",
    uReview: "One of the features I appreciated most was the user support. Whenever I had a question, there was a helpful FAQ section and even a chat option which worked promptly. It really made me feel like I wasn’t just using a product but part of a community."
}
const user11 = {
    src: "./img/Frame_11.svg",
    firstName: "Jane",
    lastName: "Pionan",
    uOccup: "web developer",
    uReview: "I recently tried out a new application, and I have to say, I’m quite impressed! The interface is clean and easy to navigate, which made getting started a breeze. I loved how intuitive everything felt; I didn’t have to spend ages figuring out where things were."
}
const user12 = {
    src: "./img/Frame_12.svg",
    firstName: "Annah",
    lastName: "Sellio",
    uOccup: "lawyer",
    uReview: "I recently downloaded this new app, and I have to say, it's been a pleasant surprise! At first, I was skeptical, but the user interface is really clean and intuitive. It took me no time at all to figure things out, which is a huge plus for someone like me who's not super techsavvy."
}
const user13 = {
    src: "./img/Frame_13.svg",
    firstName: "Arial",
    lastName: "Dean",
    uOccup: "author",
    uReview: "One of the features I love the most is the customization options. You can really make it fit your style, which makes using it feel more personal. Whether I’m managing tasks or just trying to stay organized, it’s been super helpful in keeping everything in one place."
}
const user14 = {
    src: "./img/Frame_14.svg",
    firstName: "Leo",
    lastName: "Captain",
    uOccup: "producer",
    uReview: "Notifications are spot on! They remind me when I need to check in without being overwhelming or annoying, which is something I’ve faced with other apps in the past. Plus, it seems to work seamlessly without crashing, which is always a relief."
}
const user15 = {
    src: "./img/Frame_15.svg",
    firstName: "Mellisa",
    lastName: "Nobbito",
    uOccup: "therapist",
    uReview: "I’d definitely recommend giving this app a try if you’re looking for something to help with daily organization and productivity. It’s been a gamechanger for me, and I'm excited to see what updates they roll out next!"
}
const user16 = {
    src: "./img/Frame_16.svg",
    firstName: "Zack",
    lastName: "Tyrano",
    uOccup: "butcherman",
    uReview: "I recently started using a new application, and I have to say, it's been quite an experience! Right off the bat, the user interface is clean and intuitive, making navigation a breeze. I never felt lost or overwhelmed, which is a huge plus for me."
}
const user17 = {
    src: "./img/Frame_17.svg",
    firstName: "Kimbery",
    lastName: "Owen",
    uOccup: "paramedic",
    uReview: "One feature that stands out is how customizable it is. I could easily tweak the settings to suit my personal preferences, which made using the app feel more tailored to my needs. I appreciate that they thought about how different users might want to interact with it."
}
const user18 = {
    src: "./img/Frame_18.svg",
    firstName: "Wendy",
    lastName: "Spotty",
    uOccup: "book editor",
    uReview: "Another thing worth mentioning is the responsiveness of the app. It loads quickly, and I haven't encountered any glitches, which is refreshing compared to some other apps I've tried. The smooth performance really adds to the overall enjoyment."
}
const user19 = {
    src: "./img/Frame_19.svg",
    firstName: "Tinna",
    lastName: "Zenkis",
    uOccup: "librarian",
    uReview: "One feature that stands out is how customizable it is. I could easily tweak the settings to suit my personal preferences, which made using the app feel more tailored to my needs. I appreciate that they thought about how different users might want to interact with it."
}
const user20 = {
    src: "./img/Frame_20.svg",
    firstName: "Tommas",
    lastName: "Smith",
    uOccup: "geologist",
    uReview: "I recently started using a new application, and I have to say, it's been quite an experience! Right off the bat, the user interface is clean and intuitive, making navigation a breeze. I never felt lost or overwhelmed, which is a huge plus for me."
}

const userInfo = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20]


document.getElementById("next").addEventListener('click', function(){

    if(n >= 0 && n < 19){
        n++
        $userPic.setAttribute('src', userInfo[n].src);
        $userName.innerText = userInfo[n].firstName + " " + userInfo[n].lastName;
        $userOccup.innerText = userInfo[n].uOccup;
        $userReview.innerText = userInfo[n].uReview;
    }
})

document.getElementById("pre").addEventListener('click', function(){

    if(n > 0 && n <= 19){
        n--
        $userPic.setAttribute('src', userInfo[n].src);
        $userName.innerText = userInfo[n].firstName + " " + userInfo[n].lastName;
        $userOccup.innerText = userInfo[n].uOccup;
        $userReview.innerText = userInfo[n].uReview;
    }
})

$shuffleBtn.addEventListener('click', function() {

    let ranNum = getRandomNumber();

    console.log(ranNum);
    $userPic.setAttribute('src', userInfo[ranNum].src);
    $userName.innerText = userInfo[ranNum].firstName + " " + userInfo[ranNum].lastName;
    $userOccup.innerText = userInfo[ranNum].uOccup;
    $userReview.innerText = userInfo[ranNum].uReview;
})

function getRandomNumber() {
    return Math.floor(Math.random() * userInfo.length);
}