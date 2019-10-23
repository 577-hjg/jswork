<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title></title>
        <script type="text/javascript">
        function yueshu(a){
            var count=0
            for(var i=1; i<=a; i++){
                if(a%i==0){
                    count++
                }
            }
            return count
        }
        function iszhishu(b){
            if(yueshu(b)==2){
                return true
            }else{
                return false
            }
        }
        for(var i=4; i<=100; i+=2){
            for(var j=2; j<i; j++){
                if(iszhishu(j)&&iszhishu(i-j)){
                    console.log(i+"可以拆分为"+j+"与"+(i-j))
                }
            }
        }
        </script>
    </head>
</html>