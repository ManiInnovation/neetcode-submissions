class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const set = new Set();
        const arr = []
        for(let i = 0; i<position.length;i++){
            arr.push([position[i],speed[i]])
        }
        arr.sort((a,b)=> b[0]-a[0])
        let prevTime = 0;
        let fleet = 0;
        for(let i=0;i<arr.length;i++){
            const time = (target - arr[i][0]) / arr[i][1];
            if(time> prevTime){
                fleet++;
                prevTime = time;
            }
        }
        return fleet
    }
}
