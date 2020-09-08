import './index.css';
import 'font-awesome/css/font-awesome.min.css';
declare module '*.jpeg'{
    const content: string;
    export default content;
}