async function save() {
        // console.log("Button clicked!");
        
        const name = document.getElementById('pName').value;
        const loc = document.getElementById('pLoc').value;
        const img = document.getElementById('pImg').value;

        if(!name || !loc || !img) {
            alert("Fill all details!");
            return;
        }

        const newPost = { title: name, location: loc, image: img };

        try {
            const res = await fetch('http://localhost:3000/places', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPost)
            });
            if(res.ok) window.location.href = "/Template/Explore.html";
        } catch (err) {
            alert("Error!");
        }
    }